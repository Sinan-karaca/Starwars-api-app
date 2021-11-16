import React from 'react';
import { List } from 'semantic-ui-react';
import ShowInfo from './ShowInfo';

export default function Home({ data }) {
    return (
        <>    
            <h1>People</h1>    
            {data?.map((people, i) => {
                return (
                    <List divided relaxed key={i}>
                        <List.Item>
                            <List.Icon name='user' size='large' verticalAlign='middle' />
                            <List.Content>
                                <ShowInfo data={people} />
                            </List.Content>
                        </List.Item>
                    </List>
                )
            })}


        </>
    )
}