import fs from 'fs/promises'

const write = async () => {
    try {
        const data = await fs.writeFile('./text.txt','Hi People, i am writing the file using FS Module')
        console.log(data)
    } catch (error) {
        throw new Error('Unable to write file')
    }
}

// write()

const read = async () => {
    try {
        const data = await fs.readFile('./text.txt','utf-8')
        console.log(data)
    } catch (error) {
        throw new Error('Unable to read file')
    }
}

read()

const append = async () => {
    try {
    const data = await fs.appendFile('./text.txt','.\nThis is appended text for node module')
    console.log(data)
    } catch (error) {
        throw new Error('Unable to append file')
    }
}

//append()