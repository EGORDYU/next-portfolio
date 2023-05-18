import styles from "@/styles/About.module.css"
import {useState} from "react"
// special next js images that speed up SSR caching
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(3)

    return(
        <div>
            {/* styled jsx example */}
            <style jsx>{`
                .bigHeader{
                    font-size: ${fontSize}rem
                }
            `}</style>
            <h1 className="bigHeader">About Me</h1>

            <button onClick={() => setFontSize(fontSize + 1)}>++</button>
            <button onClick={() => setFontSize(fontSize - 1)}>--</button>

            <p className={styles.greenText}> Programmer, Sc2 GM, Boxing Enthusiast, Former Electrician</p>

            {/* local images are stored in public */}
            <Image
            src="/vercel.svg"
            alt="next logo"
            //next Image components NEED a predefined pixel hieght and width
            width={200}
            height={200}
            />

            {/* using another hosting domain */}
            <Image
                src="https://placekitten.com/450/450"
                alt="furry little creature"
                width={450}
                height={450}
            />

        </div>
    )
}