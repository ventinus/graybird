## Canvas Rails Template

Template for building rails apps from scratch with admin authentication setup and uses babel and browserify to transpile ES6 to ES5.
Includes base styles, JS module structure & breakpoint utility.

## Usage

Assuming you want to create "my-rails-app":

1 - Clone this repo:
```
git clone git@github.com:canvasnyc/canvas-rails-template.git my-rails-app
```

2 - Bootstrap your app (prepare config files etc...):
```
cd my-rails-app && ./bootstrap my-rails-app
```

3 - Update git origin with your repo
```
git remote set-url origin git@github.com:canvasnyc/my-rails-app.git
```

4 - Setup Database naming in `config/database.yml`

5 - Create, migrate, and seed database with devise administrators
```
rake db:create db:migrate db:seed
```

6 - Install NPM packages for ES6 transpiling
```
npm install
```

Heroku Setup
```
git remote -v
git remote rename heroku production
git remote add staging https://git.heroku.com/HEROKU-APP-NAME.git
```

```
heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks:add heroku/ruby
```

### Documentation

* [annotate](https://github.com/ctran/annotate_models)
* [paper_trail](https://github.com/airblade/paper_trail)
* [yard](https://github.com/lsegal/yard)
* [simplecov](https://github.com/colszowka/simplecov)

### Debugging

* [byebug](https://github.com/deivid-rodriguez/byebug)
* [pry-rails](https://github.com/rweng/pry-rails)
* [better_errors](https://github.com/charliesome/better_errors)
* [binding_of_caller](https://github.com/banister/binding_of_caller)
* [brakeman](https://github.com/presidentbeef/brakeman)
* [bullet](https://github.com/flyerhzm/bullet)

### Asset Managment

* [haml](https://github.com/haml/haml)
* [asset_sync](https://github.com/rumblelabs/asset_sync)
* [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
* [compass](https://github.com/chriseppstein/compass)
* [quiet_assets](https://github.com/evrone/quiet_assets)
* [draper](https://github.com/drapergem/draper)

### Static Pages
* [high_voltage](https://github.com/thoughtbot/high_voltage)

### Testing

* [rspec-rails](https://github.com/rspec/rspec-rails)
* [cucumber-rails](https://github.com/cucumber/cucumber-rails)
* [factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails)
* [database_cleaner](https://github.com/bmabey/database_cleaner)
* [faker](https://github.com/stympy/faker)
* [guard](https://github.com/guard/guard)
* [guard-brakeman](https://github.com/guard/guard-brakeman)
* [guard-cucumber](https://github.com/guard/guard-cucumber)
* [guard-livereload](https://github.com/guard/guard-livereload)
* [guard-rspec](https://github.com/guard/guard-rspec)
* [launchy](https://github.com/copiousfreetime/launchy)
* [capybara](https://github.com/jnicklas/capybara)
* [rb-fsevent](https://github.com/thibaudgg/rb-fsevent)
* [shoulda-matchers](https://github.com/thoughtbot/shoulda-matchers)
* [timecop](https://github.com/travisjeffery/timecop)
* [email_spec](https://github.com/bmabey/email-spec‎)
* [fuubar](https://github.com/thekompanee/fuubar)
* [jasmine](https://github.com/pivotal/jasmine-gem‎)

### Authentication/Authorization

* [devise](https://github.com/plataformatec/devise)
* [cancancan](https://github.com/CanCanCommunity/cancancan‎)

### File Uploading

* [dragonfly](https://github.com/markevans/dragonfly‎)
* [fog](https://github.com/fog/fog‎)
* [rack-cache](https://github.com/rtomayko/rack-cache)

### Production

* [puma](https://github.com/puma/puma)
* [unicorn](https://github.com/defunkt/unicorn‎)
* [honeybadger](https://github.com/honeybadger-io/honeybadger-ruby)
* [newrelic_rpm](https://github.com/newrelic/rpm)
* [dalli](https://github.com/mperham/dalli)
* [ey_config](https://github.com/engineyard/ey_config)
* [therubyracer](https://github.com/cowboyd/therubyracer‎)

### Forms

* [simple_form](https://github.com/plataformatec/simple_form)
* [kaminari](https://github.com/amatsuda/kaminari‎)
* [will_paginate](https://github.com/mislav/will_paginate)
* [nested_form](https://github.com/ryanb/nested_form)


### Background Jobs

* [delayed_job_active_record](https://github.com/collectiveidea/delayed_job)
* [resque](https://github.com/resque/resque‎)
* [sidekiq](https://github.com/mperham/sidekiq‎)

### Dependencies
* [homebrew](http://brew.sh/)
* [phantomjs](http://phantomjs.org/): `brew install phantomjs`
* Terminal Notifier: `brew install terminal-notifier`
