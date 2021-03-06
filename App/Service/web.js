// var fs = require('fs');

// noteJS端与web端的接口
// web -> Node -> Web -> web
// 该Node相当于一个转发的接口, Node -> web
// 为什么要这样? 因为Note操作Tag, 而Note的操作由note.js引起, 这样会返回很多数据, 包括note, tags, 给前端来处理
// 为什么不分开到各个Note, Tag nodejs中来调用Web呢? 这样避免过多的嵌套
var Web = {
	Notebook: null,
	Note: null,
	Tag: null,

	// 断网处理
	unConnected: function() {
		var me = this;
		// me.Note.unConnected();
	},
	notLogin: function() {
		var me = this;
		// me.Note.notLogin();
	},

	alertWeb: function(msg) {
		var me = this;
		// me.Note.alertWeb(msg);
	},

	// 注入前端变量
	set: function(notebook, note, attach, tag) {
		var me = this;
		me.Notebook = notebook;
		me.Note = note;
		me.Attach = attach;
		me.Tag = tag;
	},

	addSyncNotebook: function(notebooks) {
		var me = this;
		// me.Notebook.addSync(notebooks);
	},
	updateSyncNotebook: function(notebooks) {
		var me = this;
		// me.Notebook.updateSync(notebooks);
	},
	deleteSyncNotebook: function(notebooks) {
		var me = this;
		// me.Notebook.deleteSync(notebooks);
	},
	addChangeNotebook: function(notebooks) {
		var me = this;
		// me.Notebook.addChange(notebooks);
	},
	/*
	fixNotebookConflicts: function(notebookInfo) {
		var me = this;
		me.Notebook.fixSyncConflict(notebookInfo);
	},
	*/

	//----------
	addSyncNote: function(notes) {
		var me = this;
		// me.Note.addSync(notes);
	},
	updateSyncNote: function(notes) {
		var me = this;
		// me.Note.updateSync(notes);
	},
	deleteSyncNote: function(notes) {
		var me = this;
		// me.Note.deleteSync(notes);
	},
	fixSyncConflictNote: function(note, newNote) {
		var me = this;
		// me.Note.fixSyncConflict(note, newNote);
	},
	updateNoteCacheForServer: function(notes) {
		var me = this;
		// me.Note.updateNoteCacheForServer(notes);
	},
	//--------------

	syncFinished: function() {
		var me = this;
		// me.Note.syncFinished();
	},

	// 删除笔记时, 更新左侧导航标签的count
	// TODO test
	updateTagCount: function(tag) { 
		var me = this;
		// me.Tag.updateTagCount(tag);
	},

	//
	addOrDeleteTagFromSync: function(tagSyncInfo) {
		var me = this;
		return;
		// console.log("是啊");
		// console.error(tagSyncInfo);
		var adds = tagSyncInfo.adds;
		me.Tag.addTagsNav(adds);
		var deletes = tagSyncInfo.deletes;
		me.Tag.deleteTagsNav(deletes);
	},

	addTag: function(tag) { 
		var me = this;
		// me.Tag.addTagNav(tag);
	},

	// 内容同步成功
	contentSynced: function(noteId, content) {
		var me = this;
		if(noteId) {
			// me.Note.contentSynced(noteId, content);
		}
	},

	// 通过attach已同步成功
	attachSynced: function(attachs, attach, noteId) {
		var me = this;
		// me.Attach.attachSynced(attachs, attach, noteId);
	},

	// full sync
	syncProcess: function(type, title) {
		var me = this;
		// me.Note.syncProcess('Synchronizing ' + type + '... <br /> ' + title);
	},

	// inc sync
	syncProgress: function(n) {
		var me = this;
		// me.Note.syncProgress(n);
	},

	/*
	syncNotebookFinish: function() {
		var me = this;
		me.Note.syncProcess('In sync notebooks...');
	},
	syncNoteFinish: function() {
		var me = this;
		me.Note.syncProcess('In sync notes...');
	},
	syncTagFinish: function() {
		var me = this;
		me.Note.syncProcess('In sync tags...');
	}
	*/

	// 重新统计后, 显示到web上
	updateNotebookNumberNotes: function(notebookId, count) {
		var me = this;
		// me.Notebook.updateNotebookNumberNotes(notebookId, count);
	}
};
module.exports = Web; 
