source 'https://rubygems.org'

gem 'bundler', '>= 1.7.0'

gem 'jekyll-assets'
gem 'autoprefixer-rails'
gem 'uglifier'
gem 'compass'

group :jekyll_plugins do
  gem 'octopress-minify-html'
end

group :rails_assets do
  gem 'rails-assets-jquery'
end

# GitHub pages support http://jekyllrb.com/docs/github-pages/

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
