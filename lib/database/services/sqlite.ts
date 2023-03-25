import { Sequelize } from "sequelize";

export default class SqliteService {
	private db
	DatabaseStorage = '../sqlite/data.sqlite3'

	constructor() {
		const db = new Sequelize({
			dialect: 'sqlite',
			storage: ''
		})

		this.db = db
	}

	

} 