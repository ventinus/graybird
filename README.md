## Graybird Properties

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

### TODOS:
- in updating/creating a listing, update/create listing photos
- finish FileInput
- add FileInput to PhotoInput
- handle adding a new photo
- handle changing photo
- handle deleting a photo
- handle photo sorting
