import { EyeOutlined, MessageOutlined, HeartOutlined} from '@ant-design/icons';
import * as React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import { ArticleProfile } from '~src/models/Article';
import { timestampToTime } from '~src/utilities/TimeUtilities';
import bg from '../../images/bg.jpg';
import * as styles from "./ArticleProfileItem.module.scss";
import '~styles/SharedCSSAnimation.scss'

interface ArticleProfileProps {
    profile: ArticleProfile
}

export default function ArticleProfileItem(props: ArticleProfileProps) {
    return <CSSTransition timeout={500} classNames='zoom' in={true}>
        <li key={props.profile._id} className={styles.profileItem}>
                <a className={styles.wrapImg} href="/" target="_blank">
                    <img
                    className="img-blur-done"
                    data-src={props.profile.img_url}
                    data-has-lazy-src="false"
                    src={bg}
                    alt="article background"
                    />
                </a>
                <div className={styles.leftContainer}>
                    <Link
                    className={styles.title}
                    target="_blank"
                    to={`/articleDetail?article_id=${props.profile._id}`}
                    >
                    {props.profile.title}
                    </Link>
                    <p className={styles.abstract}>{props.profile.desc}</p>
                    <div className={styles.meta}>
                    <Link
                        rel="noopener noreferrer"
                        to={`/articleDetail?article_id=${props.profile._id}`}
                    >
                        <EyeOutlined /> {props.profile.meta.views}
                    </Link>{' '}
                    <Link
                        target="_blank"
                        to={`/articleDetail?article_id=${props.profile._id}`}
                    >
                        <MessageOutlined /> {props.profile.meta.comments}
                    </Link>{' '}
                    <Link
                        target="_blank"
                        to={`/articleDetail?article_id=${props.profile._id}`}
                    >
                        <HeartOutlined /> {props.profile.meta.likes}
                    </Link>
                    <span className={styles.time}>
                        {props.profile.create_time
                        ? timestampToTime(props.profile.create_time, true)
                        : ''}
                    </span>
                    </div>
                </div>
        </li>
    </CSSTransition>
}