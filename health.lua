local function createHealthText(player)
    local humanoid = player.Character:WaitForChild("Humanoid")

    local billboardGui = Instance.new("BillboardGui")
    billboardGui.Name = "HealthGui"
    billboardGui.Adornee = humanoid.RootPart
    billboardGui.Size = UDim2.new(1, 0, 1, 0)
    billboardGui.StudsOffset = Vector3.new(0, -1.5, 0) -- Adjust the Y offset to move the text up or down
    billboardGui.AlwaysOnTop = true
    billboardGui.Parent = humanoid.RootPart

    local frame = Instance.new("Frame")
    frame.Name = "HealthTextFrame"
    frame.Size = UDim2.new(1, 0, 1, 0)
    frame.BackgroundTransparency = 1
    frame.Parent = billboardGui

    local healthText = Instance.new("TextLabel")
    healthText.Name = "HealthText"
    healthText.Size = UDim2.new(1, 0, 1, 0)
    healthText.BackgroundTransparency = 0.6
    healthText.BackgroundColor3 = Color3.new(0, 0, 0)
    healthText.BorderColor3 = Color3.new(0, 0, 0)
    healthText.Text = "HP: "..math.floor(humanoid.Health)
    healthText.Font = Enum.Font.SourceSansBold
    healthText.TextSize = 14 -- Adjust the text size as desired
    healthText.TextColor3 = Color3.fromRGB(0, 229, 146) -- Default color: #00E592
    healthText.TextStrokeTransparency = 0.3
    healthText.TextStrokeColor3 = Color3.new(0, 0, 0)
    healthText.Parent = frame

    local function updateHealthText()
        local health = humanoid.Health
        healthText.Text = "HP: "..math.floor(health)

        if health < 30 then
            healthText.TextColor3 = Color3.fromRGB(255, 165, 0) -- Orange color
        else
            healthText.TextColor3 = Color3.fromRGB(0, 229, 146) -- Default color: #00E592
        end

        if health < 20 then
            healthText.TextColor3 = Color3.fromRGB(255, 0, 0) -- Red color
            healthText.TextTransparency = 0.5 * math.abs(math.sin(tick() * 10)) -- Blinking effect
        else
            healthText.TextTransparency = 0 -- Reset transparency
        end
    end

    humanoid.Died:Connect(function()
        billboardGui:Destroy()
    end)

    humanoid.HealthChanged:Connect(updateHealthText)
end

local function onPlayerAdded(player)
    player.CharacterAdded:Connect(function(character)
        createHealthText(player)
    end)

    if player == game.Players.LocalPlayer then
        return -- Skip creating health text for the local player
    end

    if player.Character then
        createHealthText(player)
    end
end

game.Players.PlayerAdded:Connect(onPlayerAdded)

for _, player in ipairs(game.Players:GetPlayers()) do
    onPlayerAdded(player)
end
