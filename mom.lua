local StorageKey = "AlreadyExecuted"

local function executeScript(scriptUrl)
    local script = game:HttpGet(scriptUrl, true)
    local executeFunction = loadstring(script)
    executeFunction()
end

local scripts = {
    "https://raw.githubusercontent.com/farhan-sadiq-mahi/photography-app/main/luaz/design.lua",
    "https://raw.githubusercontent.com/farhan-sadiq-mahi/photography-app/main/txt.lua",
    "https://raw.githubusercontent.com/farhan-sadiq-mahi/photography-app/main/luaz/main.lua"
}

if not _G[StorageKey] then
    for _, scriptUrl in ipairs(scripts) do
        coroutine.wrap(function()
            executeScript(scriptUrl)
        end)()
    end
    
    _G[StorageKey] = true
else
    print("Script has already been executed.")
end
