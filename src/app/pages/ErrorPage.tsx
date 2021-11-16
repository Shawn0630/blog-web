import * as React from "react";
import * as styles from "./UIShared.scss";
import Paper from "@material-ui/core/Paper";

interface ErrorPageProps {
    title: string;
    error: string;
}

class ErrorPage extends React.PureComponent<ErrorPageProps> {
    public render(): JSX.Element {
        return <div className={styles.errorPage}>
            <Paper>
                <h2>{this.props.title}</h2>
                <hr/>
                <p>
                    {this.props.error}
                </p>
            </Paper>
        </div>;
    }
}

const Page404: React.FunctionComponent<any> = (): JSX.Element => { // tslint:disable-line
    return <ErrorPage title="404" error="The page you requested does not exist." />;
};

export {ErrorPage, Page404};
