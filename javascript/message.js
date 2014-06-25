function Message(message, date) {

    this.getText = function() {
        return message; //retunerar texten som skrivs
    }

    this.setText = function(_text) {
        message = _text;
    }

    this.getDate = function() {
        return date;//datumet retuneras
    }

    this.setDate = function(_date) {
        date = _date;
    }

}

Message.prototype.toString = function() {
    return this.getText()+" ("+this.getDate()+")";
}


Message.prototype.getHTMLText = function () {
    return this.getText().replace(/[\n\r]/g, "<br />");//Fixar radbrytningen
}


Message.prototype.getDateText = function() {
    return this.getDate();
}

