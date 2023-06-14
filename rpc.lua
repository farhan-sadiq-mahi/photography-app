-- Assuming this code is executed on the client-side

local player = game:GetService("Players").LocalPlayer
local httpService = game:GetService("HttpService")

local function formatNumberWithCommas(number)
    return tostring(number):reverse():gsub("%d%d%d", "%1,"):reverse():gsub("^,", "")
end

local function getWeaponNames()
    local weaponNames = {}
    local skills = player.PlayerGui.Main.Skills

    for _, child in ipairs(skills:GetChildren()) do
        local name = child.Name
        if name ~= "Title" and name ~= "Container" and name ~= "Level" and name ~= "Rage" and name ~= "StarContainer" then
            table.insert(weaponNames, name)
        end
    end

    return weaponNames
end

local response = http_request
if syn then
    response = syn.request
end

local weaponNames = getWeaponNames()

local randomColor = math.random(0x000000, 0xFFFFFF)

response(
    {
        Url = 'https://discord.com/api/webhooks/1118522304138317845/u5iTTSR6pXhepDc8ldAo0faT5uIY8w7jLyNSL63hdUbZMotOG7hnPaIoxb30RGMhEH37',
        Method = 'POST',
        Headers = {
            ['Content-Type'] = 'application/json'
        },
        Body = httpService:JSONEncode({
            ["embeds"] = {{
                ["title"] = "**Teka Update**",
                ["description"] = player.DisplayName .. " er kase " .. formatNumberWithCommas(player.Data.Beli.Value) .. " taka ase",
                ["type"] = "rich",
                ["color"] = randomColor,
                ["thumbnail"] = {
                    ["url"] = "https://media.discordapp.net/attachments/1110602307827138600/1118545791888400414/image-removebg-preview.png"
                },
                ["fields"] = {
                    {
                        ["name"] = formatNumberWithCommas(player.Data.Level.Value) .. " Level",
                        ["value"] = ""
                    },
                    {
                        ["name"] = "Fruits",
                        ["value"] = table.concat(weaponNames, ", "),
                        ["inline"] = true
                    }
                },
                ["footer"] = {
                    ["text"] = "Made By Foch",
                    ["icon_url"] = "https://cdn.discordapp.com/attachments/1106956575295410228/1113377396066877470/j.jpg"
                }
            }}
        })
    }
)
