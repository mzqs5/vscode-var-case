// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mzqs5" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let toVarLowerCaseDisposable = vscode.commands.registerCommand('extension.toVarLowerCase', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// 编辑器对象
		const editor = vscode.window.activeTextEditor
		if (editor) {
			// 获取所有选中文本
			const allSelections = editor.selections

			editor.edit(editBuilder => {
				// 遍历并替换文本
				allSelections.forEach(selection => {
					const text = editor.document.getText(selection)
					editBuilder.replace(selection, toVarLowerCase(text))
				})
			})
		}
	});

	let toVarUpperCaseDisposable = vscode.commands.registerCommand('extension.toVarUpperCase', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// 编辑器对象
		const editor = vscode.window.activeTextEditor
		if (editor) {
			// 获取所有选中文本
			const allSelections = editor.selections

			editor.edit(editBuilder => {
				// 遍历并替换文本
				allSelections.forEach(selection => {
					const text = editor.document.getText(selection)
					editBuilder.replace(selection, toVarUpperCase(text))
				})
			})
		}
	});
	context.subscriptions.push(toVarLowerCaseDisposable);
	context.subscriptions.push(toVarUpperCaseDisposable);
}
var toVarLowerCase = function (text: string) {
	let tests = text.replace(/(\b[A-Z][a-zA-Z]*\b)/g, function (rs, $1) {
		return rs.replace(/(\b[A-Z])/g, function (item) {
			return item.toLowerCase()
		})
	})
	return tests
}
var toVarUpperCase = function (text: string) {
	let tests = text.replace(/(\b[a-z][a-zA-Z]*\b)/g, function (rs, $1) {
		return rs.replace(/(\b[a-z])/g, function (item) {
			return item.toUpperCase()
		})
	})
	return tests
}

// this method is called when your extension is deactivated
export function deactivate() { }
