const puppeteer = require('puppeteer');
const TelegramBot = require('node-telegram-bot-api');
require('./db/db')
let db2 = require('./db/model/db')

async function start(name) {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage()

    await page.goto('https://trade.metatrader5.com/terminal', { waitUntil: ['domcontentloaded', 'load', 'networkidle0', 'networkidle2'] })
    await page.evaluate(() => {
        document.querySelector('.accept-button.svelte-yxtt66').click()

    })
    await page.waitForSelector('.button')
    await page.waitForSelector('.button')
    await page.evaluate(() => {
        document.querySelector('.button').click()
    })
    await page.waitForSelector('.button.svelte-aawtpb.active')
    await page.waitForSelector('button')
    await new Promise(async (re) => {
        await setTimeout((e) => {
            re('hi')
        }, 2000)
    })
    console.log('ho')
    await page.evaluate(() => {

        document.querySelector('.button.svelte-aawtpb.active').click()
    })

    await new Promise(async (re) => {
        await setTimeout((e) => {
            re('hi')
        }, 5000)
    })
    await page.evaluate(() => {
        document.querySelector('[title="Add Indicator (Ctrl + I)"]').click();
    })
    await new Promise(async (re) => {
        await setTimeout((e) => {
            re('hi')
        }, 2000)
    })
    await page.evaluate(() => {

        document.querySelector('.buttons.svelte-1o7hjya').querySelector(':nth-child(4)').click();
    })
    await new Promise(async (re) => {
        await setTimeout((e) => {
            re('hi')
        }, 2000)
    })
    await page.evaluate(() => {

        document.querySelectorAll('.item.svelte-1sfxbbv')[3].click()
    })
    await new Promise(async (re) => {
        await setTimeout((e) => {
            re('hi')
        }, 2000)
    })
    await page.evaluate(() => {

        document.querySelector('.button.svelte-aawtpb.active').click()
    })
    await new Promise(async (re) => {
        await setTimeout((e) => {
            re('hi')
        }, 2000)
    })
    await page.evaluate(() => {

        document.querySelector('.drop-view.svelte-kisuhz ').firstChild.className = "open";

    })
    await new Promise(async (re) => {
        await setTimeout((e) => {
            re('hi')
        }, 2000)
    })
    await page.evaluate(() => {


        document.querySelector('[title="1 Minute"]').click();
        document.querySelector('.drop-view.svelte-kisuhz ').firstChild.className = "";
    })
    await new Promise(async (re) => {
        await setTimeout((e) => {
            re('hi')
        }, 3000)
    })
    await new Promise(async (re) => {
        setTimeout((e) => {
            re('hi')
        }, 1000)
    })
    let i = 0;
    while (true) {

        let k = await page.evaluate(async () => {

            let pair, ask, bid, chg, vo;
            let date = new Date().toString()
            try {
                let data = document.querySelectorAll('.tr.svelte-1c4nhxj .item ');

                Array.from(data).forEach(async e => {
                    let ar = e.children;
                    pair = ar[0].querySelector('.text').textContent
                    bid = Number(ar[1].querySelector('.value').textContent)
                    ask = Number(ar[2].querySelector('.value').textContent)
                    chg = Number(ar[3].querySelector('.value').textContent.split('%')[0])
                    vo = Number(document.querySelector('.values.svelte-1cwgnqa').textContent)

                })
                return {
                    pair, ask, bid, chg, vo, date
                }
            } catch (error) {
                console.log('error' + error)
                return {
                    pair, ask, bid, chg, vo, date
                }
            }


        })
        try {
            i++;
            console.log(k)

            db2({
                pair: k.pair, ask: k.ask, bid: k.bid, chg: k.chg, volome: k.vo, date: k.date
            }).save()
        } catch (error) {
            console.log(error)
        }
        await new Promise(async (re) => {
            await setTimeout((e) => {
                re('hi')
            }, 100)
        })

    }


}
start()
console.log('ih')