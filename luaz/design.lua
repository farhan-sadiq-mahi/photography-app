local textLabel = game:GetService("Players").LocalPlayer.PlayerGui.Main.Beli

if not textLabel.Visible then
    textLabel.Visible = true
end

local originalColor = textLabel.TextColor3
local targetColor = Color3.new(255, 0, 0) -- The desired final color
local colorDuration = 2 -- The duration of the color animation in seconds
local delayDuration = 4 -- The duration of the delay before color animation in seconds

local startTime = tick()

game:GetService("RunService").Heartbeat:Connect(function()
    local elapsedTime = tick() - startTime
    
    -- Delay before color animation
    if elapsedTime <= delayDuration then
        return -- Skip the color animation while in the delay period
    end
    
    -- Color animation
    local colorProgress = (elapsedTime - delayDuration) / colorDuration
    if colorProgress <= 1 then
        local currentColor = originalColor:Lerp(targetColor, colorProgress)
        textLabel.TextColor3 = currentColor
    else
        -- Animation completed, reset the text color
        game:GetService("RunService").Heartbeat:Disconnect()
        textLabel.TextColor3 = originalColor
    end
end)
