# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル
|Column|Type|Options|
|------|----|-------|
|email|string |null: false|
|password|string |null: false|
|name|string |null: false|
### Association
- has_many :groups, through: :user_groups
- has_many :chats
- has_many :user_groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :chats
- has_many :user, through: :user_groups
- has_many :user_groups


## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
|comment|text|
### Association
- belongs_to :user
- belongs_to :groups


## user_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :groups

