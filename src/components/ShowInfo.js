import React, { useState } from 'react';
import { Accordion, List } from 'semantic-ui-react';

export default function ShowInfo ({data}) {

const [state, setState] = useState (false)
const {name, height, mass, hair_color} = data

    return (
        <>  
        <Accordion>

            <Accordion.Title onClick={() => setState(!state)}>
                <List.Header><h2>{name}</h2></List.Header>
            </Accordion.Title>

            <Accordion.Content active={state}>
                <List divided relaxed>
                    <List.Item>
                        <List.Content>
                            <List.Description>
                                <strong>Height</strong>
                                <p>{height}</p>
                            </List.Description>
                            <List.Description>
                                <strong>Mass</strong>
                                <p>{mass}</p>
                            </List.Description>
                            <List.Description>
                                <strong>Hair Color</strong>
                                <p>{hair_color}</p>
                            </List.Description>
                        </List.Content>
                    </List.Item>
                </List>  
            </Accordion.Content>

        </Accordion>
        </>
    )
}