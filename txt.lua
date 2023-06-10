-- Constants
local TEXT = "Foch Angry"
local TEXT_SIZE = 90
local TYPING_SPEED = 0.05 -- Delay between each character typing animation (in seconds)
local CLEARING_SPEED = 0.02 -- Delay between each character clearing animation (in seconds)
local TEXT_COLOR = Color3.fromRGB(229, 0, 0) -- #00E592
local STROKE_COLOR = Color3.new(0, 0, 0)
local STROKE_TRANSPARENCY = 0.5
local BACKGROUND_TRANSPARENCY = 0.6

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "EditedByFochGui"
screenGui.Parent = game.Players.LocalPlayer.PlayerGui

-- Create Frame for text background
local backgroundFrame = Instance.new("Frame")
backgroundFrame.Name = "BackgroundFrame"
backgroundFrame.Size = UDim2.new(1, 0, 1, 0)
backgroundFrame.BackgroundTransparency = BACKGROUND_TRANSPARENCY
backgroundFrame.BackgroundColor3 = Color3.new(0, 0, 0)
backgroundFrame.BorderSizePixel = 0
backgroundFrame.Parent = screenGui

-- Create TextLabel
local textLabel = Instance.new("TextLabel")
textLabel.Name = "EditedByText"
textLabel.Size = UDim2.new(1, 0, 1, 0)
textLabel.BackgroundTransparency = 1
textLabel.TextColor3 = TEXT_COLOR
textLabel.TextSize = TEXT_SIZE
textLabel.Font = Enum.Font.GothamSemibold -- Change the font to a gaming-style font of your choice
textLabel.TextStrokeTransparency = STROKE_TRANSPARENCY
textLabel.TextStrokeColor3 = STROKE_COLOR
textLabel.Parent = backgroundFrame

-- Calculate the center of the screen
local screenWidth = game:GetService("GuiService"):GetScreenResolution().X
local screenHeight = game:GetService("GuiService"):GetScreenResolution().Y
local center = Vector2.new(screenWidth / 2, screenHeight / 2)

-- Set initial properties
textLabel.Position = UDim2.new(0.5, 0, 0.5, 0)
textLabel.AnchorPoint = Vector2.new(0.5, 0.5)
textLabel.Visible = true
textLabel.Text = "" -- Set an empty initial text

-- Function to animate the typing effect
local function animateTyping()
    for i = 1, #TEXT do
        local char = string.sub(TEXT, i, i)
        textLabel.Text = textLabel.Text .. char
        wait(TYPING_SPEED)
    end
end

-- Function to animate the clearing effect
local function animateClearing()
    for i = #TEXT, 1, -1 do
        textLabel.Text = string.sub(TEXT, 1, i)
        wait(CLEARING_SPEED)
    end
    textLabel.Visible = false
    screenGui:Destroy()
end

-- Animate the typing effect
animateTyping()
wait(3) -- Change this delay as desired, representing the duration the text remains on the screen

-- Animate the clearing effect
animateClearing()
