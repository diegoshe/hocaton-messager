

state = {
MessagesResponse: {
		page: 5,
		totalCount: 5,
		pageSize: 5,
		messages: {
			chatId: "43",
			authorId: "54",
			isRead: true,
			date: {},
			status: ""                  // "not-deleted" | "deleted-for-sender" | "deleted-for-recipient" | "deleted-for-all";
		}
	},
 IPhoto: {
		small: "",
		large: ""
	},
IInterlocutor: {
		id: "",
		name: "Tolik",
		photo: {
			small: "",
			large: ""
		},
		visitDate: "Date"
	},
ILastMessage: {
		body: "",
		authorId: "",
		date: "Date",
		isRead: true
	},
IChat: {
		_id: "",
		userId: "",
		interlocutor: {
			id: "",
			name: "Tolik",
			photo: {
				small: "",
				large: ""
			},
			visitDate: "Date"
		},
		newMessagesCount: 22,
		lastMessage:  {
			body: "",
			authorId: "",
			date: "Date",
			isRead: true
		},
		isHidden: true
	},

	//type MessageStatusType = "not-deleted" | "deleted-for-sender" | "deleted-for-recipient" | "deleted-for-all";

IMessage: {
		chatId: "",
		authorId: "",
		isRead: "",
		date: "Date",
		status: ""              // "not-deleted" | "deleted-for-sender" | "deleted-for-recipient" | "deleted-for-all";
	},

	export class Chat implements IChat {
		_id: string

		constructor(public userId: string,
		public interlocutor: IInterlocutor,
		public newMessagesCount: number,
		public lastMessage: LastMessage,
		public isHidden: boolean) {
		this._id = new Date().getTime().toString();
	}
}

	export class Interlocutor implements IInterlocutor {
		constructor(public id: string,
		public name: string,
		public photo: IPhoto,
		public visitDate: Date) {
	}
}

	export class LastMessage implements ILastMessage {
		constructor(public body: string,
		public authorId: string,
		public date: Date,
		public isRead: boolean) {
	}
}

	export class Photo implements IPhoto {
		constructor(public large: string,
		public small: string) {
	}
}


	export class Message implements IMessage {
		_id: string

		constructor(public chatId: string,
		public authorId: string,
		public isRead: boolean,
		public date: Date,
		public status: MessageStatusType) {
		this._id = "fake" + new Date().getTime();
	}
}
}
