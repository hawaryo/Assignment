import styles from "./ContactCard.module.scss";

type Props = {
    icon: string,
    title: string,
    text1: string,
    text2: string
}


export default function ContactCard({ icon, title, text1, text2 }: Props) {


    return(
        <div className={styles.contactcard}>
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    )
}