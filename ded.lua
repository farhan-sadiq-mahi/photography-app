-- Function to kill the character
local function killCharacter(character)
    if character then
        local humanoid = character:FindFirstChild("Humanoid")
        if humanoid then
            humanoid.Health = 0
        end
    end
end

-- Function to generate a random interval
local function getRandomInterval()
    local intervals = {60, 140, 102, 120}
    local randomIndex = math.random(1, #intervals)
    return intervals[randomIndex]
end

-- Function to repeatedly kill the character at random intervals
local function repeatKill(character)
    while true do
        wait(getRandomInterval())
        killCharacter(character)
    end
end

-- Get the player's character
local player = game.Players.LocalPlayer

-- Listen for character added event
player.CharacterAdded:Connect(function(character)
    repeatKill(character)
end)

-- Check if the character already exists
if player.Character then
    repeatKill(player.Character)
end
