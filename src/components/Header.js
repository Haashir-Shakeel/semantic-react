import { Header, Segment, Image } from 'semantic-ui-react'

export const HeaderComponent=() =>{
    return(
    <div>
        <Segment basic inverted padded='very' vertical>
          <Header as='h1'>Header</Header>
          <Image size='small' centered src={'logo512.png'}/>
          <Header as='h3'>Subheading Header</Header>
          </Segment>
  </div>
    )
}