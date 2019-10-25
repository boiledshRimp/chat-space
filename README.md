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

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string |null: false|
|password|string |null: false|
|name|string |null: false|
### Association
- has_many :chatgroups, through: :users_chatgroups
- has_many :chat
- has_many :users_chatgroups


## chatgroupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :chat
- has_many :users, through: :users_chatgroups
- has_many :users_chatgroups


## chatテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|
|user_id|integer|null: false, foreign_key: true|
|chatuser_id|integer|null: false, foreign_key: true|
|comment|text|
### Association
- belongs_to :users
- belongs_to :chatgroups


## users_chatgroups
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|chatgroups_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :chatgroups

