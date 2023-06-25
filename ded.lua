-- Get the player's character
local player = game.Players.LocalPlayer
local character = player.Character

-- Function to kill the character
local function killCharacter()
    -- Check if the character exists
    if character then
        -- Kill the character
        local humanoid = character:FindFirstChild("Humanoid")
        if humanoid then
            humanoid.Health = 0
        end
    end
end

-- Loop to kill the character every 9 seconds
while true do
    wait(6)
    killCharacter()
end
