import React from 'react'

import { SelectedName, SelectedWrapper, SelectedDesc, SelectedLink } from 'Styled/Selected'

const Selected = ({ works }) => (
  works.map(work => (
    <SelectedWrapper colour={work.colour} key={work.order}>
      <SelectedLink href={work.link} target="_blank">
        <SelectedName>{work.name}</SelectedName>
        <SelectedDesc>{work.desc}</SelectedDesc>
      </SelectedLink>
    </SelectedWrapper>
  ))
)

export default Selected
