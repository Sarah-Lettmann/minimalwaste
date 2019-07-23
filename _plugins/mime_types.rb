require 'webrick'
include WEBrick
WEBrick::HTTPUtils::DefaultMimeTypes.store 'js', 'text/javascript'
WEBrick::HTTPUtils::DefaultMimeTypes.store 'ico', 'image/x-icon'
