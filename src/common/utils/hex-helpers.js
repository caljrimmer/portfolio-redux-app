const hex_diagonals = [Hex(2, -1, -1), Hex(1, -2, 1), Hex(-1, -1, 2), Hex(-2, 1, 1), Hex(-1, 2, -1), Hex(1, 1, -2)];
const hex_directions = [Hex(1, 0, -1), Hex(1, -1, 0), Hex(0, -1, 1), Hex(-1, 0, 1), Hex(-1, 1, 0), Hex(0, 1, -1)];
const EVEN = 1;
const ODD = -1;
const layout_pointy = Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);
const layout_flat = Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0), 2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);

export function Point(x, y) {
    return {
        x: x,
        y: y
    };
}

export function Hex(q, r, s) {
    return {
        q: q,
        r: r,
        s: s
    };
}

export function hex_add(a, b) {
    return Hex(a.q + b.q, a.r + b.r, a.s + b.s);
}

export function hex_subtract(a, b) {
    return Hex(a.q - b.q, a.r - b.r, a.s - b.s);
}

export function hex_scale(a, k) {
    return Hex(a.q * k, a.r * k, a.s * k);
}

export function hex_direction(direction) {
    return hex_directions[direction];
}

export function hex_neighbor(hex, direction) {
    return hex_add(hex, hex_direction(direction));
}

export function hex_diagonal_neighbor(hex, direction) {
    return hex_add(hex, hex_diagonals[direction]);
}

export function hex_length(hex) {
    return Math.trunc((Math.abs(hex.q) + Math.abs(hex.r) + Math.abs(hex.s)) / 2);
}

export function hex_distance(a, b) {
    return hex_length(hex_subtract(a, b));
}

export function hex_round(h) {
    var q = Math.trunc(Math.round(h.q));
    var r = Math.trunc(Math.round(h.r));
    var s = Math.trunc(Math.round(h.s));
    var q_diff = Math.abs(q - h.q);
    var r_diff = Math.abs(r - h.r);
    var s_diff = Math.abs(s - h.s);
    if (q_diff > r_diff && q_diff > s_diff) {
        q = -r - s;
    } else if (r_diff > s_diff) {
        r = -q - s;
    } else {
        s = -q - r;
    }
    return Hex(q, r, s);
}

export function hex_lerp(a, b, t) {
    return Hex(a.q + (b.q - a.q) * t, a.r + (b.r - a.r) * t, a.s + (b.s - a.s) * t);
}

export function hex_linedraw(a, b) {
    var N = hex_distance(a, b);
    var results = [];
    var step = 1.0 / Math.max(N, 1);
    for (var i = 0; i <= N; i++)
    {
        results.push(hex_round(hex_lerp(a, b, step * i)));
    }
    return results;
}

export function OffsetCoord(col, row) {
    return {col: col, row: row};
}

export function qoffset_from_cube(offset, h) {
    var col = h.q;
    var row = h.r + Math.trunc((h.q + offset * (h.q & 1)) / 2);
    return OffsetCoord(col, row);
}

export function qoffset_to_cube(offset, h) {
    var q = h.col;
    var r = h.row - Math.trunc((h.col + offset * (h.col & 1)) / 2);
    var s = -q - r;
    return Hex(q, r, s);
}

export function roffset_from_cube(offset, h) {
    var col = h.q + Math.trunc((h.r + offset * (h.r & 1)) / 2);
    var row = h.r;
    return OffsetCoord(col, row);
}

export function roffset_to_cube(offset, h) {
    var q = h.col - Math.trunc((h.row + offset * (h.row & 1)) / 2);
    var r = h.row;
    var s = -q - r;
    return Hex(q, r, s);
}

export function Orientation(f0, f1, f2, f3, b0, b1, b2, b3, start_angle) {
    return {f0: f0, f1: f1, f2: f2, f3: f3, b0: b0, b1: b1, b2: b2, b3: b3, start_angle: start_angle};
}

export function Layout(orientation, size, origin) {
    return {orientation: orientation, size: size, origin: origin};
}

export function hex_to_pixel(layout, h) {
    var M = layout.orientation;
    var size = layout.size;
    var origin = layout.origin;
    var x = (M.f0 * h.q + M.f1 * h.r) * size.x;
    var y = (M.f2 * h.q + M.f3 * h.r) * size.y;
    return Point(x + origin.x, y + origin.y);
}

export function pixel_to_hex(layout, p) {
    var M = layout.orientation;
    var size = layout.size;
    var origin = layout.origin;
    var pt = Point((p.x - origin.x) / size.x, (p.y - origin.y) / size.y);
    var q = M.b0 * pt.x + M.b1 * pt.y;
    var r = M.b2 * pt.x + M.b3 * pt.y;
    return Hex(q, r, -q - r);
}

export function hex_corner_offset(layout, corner) {
    var M = layout.orientation;
    var size = layout.size;
    var angle = 2.0 * Math.PI * (corner + M.start_angle) / 6;
    return Point(size.x * Math.cos(angle), size.y * Math.sin(angle));
}

export function polygon_corners(layout, h) {
    var corners = [];
    var center = hex_to_pixel(layout, h);
    for (var i = 0; i < 6; i++)
    {
        var offset = hex_corner_offset(layout, i);
        corners.push(Point(center.x + offset.x, center.y + offset.y));
    }
    return corners;
}
