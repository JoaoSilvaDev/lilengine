class JColor
{
    static RandomColor(saturation, lightness, alpha)
    {
        let hue = Math.random()
        let color = {h:hue, s:saturation, l:lightness, a:alpha}

        color = this.HSLAtoRGBA(color)

        return this.RGBAColorToString(color)
    }

    static RGBtoHSL(color)
    {
        var r = color.r / 255
        var g = color.g / 255
        var b = color.b / 255

        var max = Math.max(r,g,b)
        var min = Math.min(r,g,b)        

        var h, s, l = (max + min) / 2

        if(max == min)
        {
            h = s = l = 0
        }
        else
        {
            var d = max - min
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

            switch(max)
            {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break
                case g: h = (b - r) / d + 2; break
                case b: h = (r - g) / d + 4; break
            }

            h /= 6
        }

        return {h:h, s:s, l:l};
    }

    static RGBAtoHSLA(color)
    {
        var r = color.r / 255
        var g = color.g / 255
        var b = color.b / 255
        var a = color.a

        var max = Math.max(r,g,b)
        var min = Math.min(r,g,b)        

        var h, s, l = (max + min) / 2

        if(max == min)
        {
            h = s = l = 0
        }
        else
        {
            var d = max - min
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

            switch(max)
            {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break
                case g: h = (b - r) / d + 2; break
                case b: h = (r - g) / d + 4; break
            }

            h /= 6
        }

        print(a)

        return {h:h, s:s, l:l, a:a};
    }

    static HSLtoRGB(color)
    {
        var r, g, b

        var h = color.h
        var s = color.s
        var l = color.l
    
        if(s == 0)
        {
            r = g = b = l // achromatic
        }
        else
        {
            var hue2rgb = function hue2rgb(p, q, t)
            {
                if(t < 0)
                    t += 1

                if(t > 1)
                    t -= 1

                if(t < 1/6)
                    return p + (q - p) * 6 * t

                if(t < 1/2)
                    return q

                if(t < 2/3)
                    return p + (q - p) * (2/3 - t) * 6

                return p
            }
    
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s
            var p = 2 * l - q

            r = hue2rgb(p, q, h + 1/3)
            g = hue2rgb(p, q, h)
            b = hue2rgb(p, q, h - 1/3)
        }
    
        return {r:Math.round(r * 255), g:Math.round(g * 255), b:Math.round(b * 255)}
    }

    static HSLAtoRGBA(color)
    {
        var r, g, b

        var h = color.h
        var s = color.s
        var l = color.l
        var a = color.a
    
        if(s == 0)
        {
            r = g = b = l // achromatic
        }
        else
        {
            var hue2rgb = function hue2rgb(p, q, t)
            {
                if(t < 0)
                    t += 1

                if(t > 1)
                    t -= 1

                if(t < 1/6)
                    return p + (q - p) * 6 * t

                if(t < 1/2)
                    return q

                if(t < 2/3)
                    return p + (q - p) * (2/3 - t) * 6

                return p
            }
    
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s
            var p = 2 * l - q

            r = hue2rgb(p, q, h + 1/3)
            g = hue2rgb(p, q, h)
            b = hue2rgb(p, q, h - 1/3)
        }
    
        return {r:Math.round(r * 255), g:Math.round(g * 255), b:Math.round(b * 255), a:a}
    }

    static RGBColorToString(color)
    {
        return this.RGBToString(color.r, color.g, color.b)
    }

    static RGBAColorToString(color)
    {
        return this.RGBAToString(color.r, color.g, color.b, color.a)
    }

    static RGBToString(r, g, b)
    {
        return "rgb(" + r + "," + g + "," + b + ")"
    }

    static RGBAToString(r, g, b, a)
    {
        return "rgb(" + r + "," + g + "," + b + "," + a + ")"
    }
}