import React from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';

const { Column } = Table;

const data = [{
    key: '1',
    repoName: 'John',
    mostStars: 'Brown',
    creationDate: 32,
    description: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    repoName: 'Jim',
    mostStars: 'Green',
    creationDate: 42,
    description: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    repoName: 'Joe',
    mostStars: 'Black',
    creationDate: 32,
    description: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];

export default class RepoTable extends React.Component {

    constructor(props) {
        super(props);

        // states
        this.state = {
            login: props.login,
            name: props.name,
            stargazers: 0,
            watchers: 0,
        };
    }

    componentWillReceiveProps(newProps) {
        // DRY
        const repo = newProps.data.repositoryOwner.repository;

        // states
        this.setState({
            login: this.props.login,
            name: this.props.name,
            stargazers: repo.stargazers.totalCount,
            watchers: repo.watchers.totalCount
        });
    }


    render() {
        return (
            <Table dataSource={data}>
                <Column
                    title="Repo's name"
                    dataIndex="repoName"
                    key="repoName"
                />
                <Column
                    title="Most stars"
                    dataIndex="mostStars"
                    key="mostStars"
                />
                <Column
                    title="Creation date"
                    dataIndex="creationDate"
                    key="creationDate"
                />
                <Column
                    title="Description"
                    dataIndex="description"
                    key="description"
                />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <span>
                            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                        </span>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <a href="javascript:;">Invite {record.lastName}</a>
                            <Divider type="vertical" />
                            <a href="javascript:;">Delete</a>
                        </span>
                    )}
                />
            </Table>)
    }
}

// const RepoTableWithInfo = withInfo(RepoTable);
// export default RepoTableWithInfo;