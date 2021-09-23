const { beforeEach, test, expect } = require('@jest/globals');
const exp = require('constants');
const fs = require('fs');
const path = require('path');
const { doc } = require('prettier');
const { describe } = require('yargs');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html/'), 'utf8');


describe("index.html", () => {
    beforeEach( () => {
        document.documentElement.innerHTML = html.toString;
    })


    describe("form", () => {
        test("it exists", () => {
            const form = document.querySelector("form");
            expect(form).toBeTruthy;

        })


        test("form hides when submitted", () => {
            expect(hideform)
        })
    })
})