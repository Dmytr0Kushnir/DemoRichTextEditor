function onCustomCommandExecuted(s, e) {
    switch (e.commandName) {
        case 'insertEmailSignature':
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, '_________');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'Best regards,');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'John Smith');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'john@example.com');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, '+1 (818) 844-0000');
            break;
        case 'sendEmail':
            var text = s.document.getText();
            var mailto_link = 'mailto:bob@example.com?subject=Test&body=' + encodeURIComponent(text);
            window = window.open(mailto_link, 'emailWindow');
            if(window && window.open && !window.closed)
                window.close();
            break;
    }
}

function onDocumentLoaded(s, e) {
    s.document.insertText(0, 'Dear Mr Stanley,');
    s.document.insertParagraph(s.document.length);
    var startPosition = s.document.length;
    s.document.insertParagraph(startPosition);
    s.document.insertText(startPosition, '[Type your text here]');
    s.selection.setSelection(new DevExpress.RichEdit.Interval(startPosition, s.document.length - startPosition));
    s.focus();
}
