module Jekyll
    module AssetsPath
        def img_assets(imgName)
            # 系统路径
            @@url = @context.registers[:site].config["url"]
            "#{@@url}/assets/img/#{imgName}"
        end

        def css_assets(cssName)
            # 系统路径
            @@url = @context.registers[:site].config["url"]
            "#{@@url}/assets/#{cssName}"
        end
    end
end

Liquid::Template.register_filter(Jekyll::AssetsPath)