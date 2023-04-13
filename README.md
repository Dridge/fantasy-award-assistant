# Fantasy League Manager Award Assistant
Lets make fantasy premier league more fun, for those in private leagues with group chats find out who your Manager of the Month is easily and consistently.


## The Idea

You are in a fantasy premier league, mini-league. You see your competitors loosing interest or steaming ahead. But what's it all for? If you're not fighting for top spot or to avoid the wooden spoon of last place you want to encourage everyone to stay engaged and offer out awards each month, week, and year.

This tool uses the fantasy football rest api to identify who the Manager of the Month is. No more scrolling and manually comparing to see who is the best, find out in seconds and let your league know who wins which Manager award.

## The approach

A simple api endpoint which returns data given certain inputs

A simple web form that produces a default "Manager of the Month" award.

A paid section that can send out emails / reminders and full customisation of what metrics are used in the "Manager of the Month" award.

Other potential features are:

1. Weightings for three categories that factor into manager of the month award
1. a floor and cieling value for each category, if you are far and away the most dominant then disregard weightings
1. Change the categories that factor into manager of the month award
1. Optional weekly awards (MoM but applied to the week)
1. Manager of the year award
1. Individual awards for:

|Award Name|Descriptions|
|---|---|
|the rising star awards| performed the best given their average league position|
|the domination award| purely points based|
|eco friendly| the manager who spent the least per point|
|hoarder| the most expensive squad|
|wheeler dealer| who made the most on selling players|
|rotating doors| who transfered the most players|
|consistent| the manager who had the least change in points gw to gw|
|bench warmers| the manager who had the most points on the bench|

MVP is a Manager of the month award based on:
- rising star
- domination
- consistency

## Development

This is a React web app.

- Start it up by running `npm start`.
- Build with `npm run build`
- The build cmd may prompt for install: `npm install -g serve`

## The implementation details

### Simple web form

User supplied league id
Select a month
Go button
Display GWs in each month

### Identify which GW's are in which month

1. get keys without an error:
 curl "https://fantasy.premierleague.com/api/bootstrap-static/" | jq -r '(.events[0] | {id, name, deadline_time, deadline_time_epoch} | keys ) | @csv'
1. get values inside an array:
 curl "https://fantasy.premierleague.com/api/bootstrap-static/" | jq '(.events[0] | {id, name, deadline_time, deadline_time_epoch} | flatten | values )'
1. Now it's in a simple array @csv:
 curl "https://fantasy.premierleague.com/api/bootstrap-static/" | jq '(.events[] | {id, name, deadline_time, deadline_time_epoch} | flatten | values ) | @csv'
1. And all together, redirecting to write to file:
 curl "https://fantasy.premierleague.com/api/bootstrap-static/" | jq -r '(.events[0] | {id, name, deadline_time, deadline_time_epoch} | keys ) | @csv' > ~/temp/fpl-gameweek-details.csv
 curl "https://fantasy.premierleague.com/api/bootstrap-static/" | jq -r '(.events[] | {id, name, deadline_time, deadline_time_epoch} | flatten | values ) | @csv' >> ~/temp/fpl-gameweek-details.csv

### Find out how each manager in the league did

1. get league standings to get manager ids:
 https://fantasy.premierleague.com/api/leagues-classic/{league_id}/standings
  curl -H "Accept: application/json" https://fantasy.premierleague.com/api/leagues-classic/$leagueId/standings

1. and each managers history
  https://fantasy.premierleague.com/api/entry/{manager_id}/history/
 
### Produce a MoM

With that data for the given month on each manager return the manager that had the best "score"

## Insiders

Similar to MkDocs we follow a sponsorware and insiders approach to releases and advanced features. Advanced features being anything beyond the basic and free functionality. New features are first exclusively released to sponsors as part of Insiders. I am new to this concept so have taken the lead from other projects specifically mkdocs as an example of how this can work well. Their documentation is great on the subject: https://squidfunk.github.io/mkdocs-material/insiders/

I plan to use mkdocs in this project and others in the near future.
