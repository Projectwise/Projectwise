import React from 'react'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'

import Container from '../../components/Container'
import Margin from '../../components/Margin'
import Badge from '../../components/Badge'
import LikeButton from '../../containers/LikeButton'

import colors from '../../styles/colors'
import { shortName } from '../../config/disqus'

const WrappedContainer = styled(Container)`
  max-width: 800px;
  min-height: calc(100vh - 130px);
`

const ProjectPage = ({ project }) => {
  const {
    slug,
    title,
    description,
    projectUrl,
    categories,
    helpDescription,
    addedBy
  } = project

  const disqusConfig = {
    url: window.location.href,
    identifier: slug,
    title: title
  }

  return (
    <WrappedContainer color={colors.white} className='pt-5 px-4'>
      <h3>{title}</h3>
      <div className='d-flex justify-content-between pt-3'>
        <div>
          <span>
            <i className='fa fa-globe' />
            <a href={projectUrl}>&nbsp;{projectUrl}</a>
          </span>
        </div>
        <div>
          <span><i className='fa fa-user-circle-o' />&nbsp;{addedBy.username}</span>
        </div>
        <div>
          {categories && categories.map((category, index) => (
            <Badge key={index} color='info'>{category}</Badge>
          ))}
        </div>
      </div>
      <Margin className='my-2' />
      <h5 className='mt-4'>Project Details</h5>
      <p>{description}</p>
      <h5>Project Help Requirements</h5>
      <p>{helpDescription}</p>
      <Margin className='mt-4 mb-2' />
      <div className='d-flex justify-content-between pt-2'>
        <LikeButton project={project} />
      </div>
      <Container className='pb-4' color={colors.white}>
        <DiscussionEmbed shortname={shortName} config={disqusConfig} />
      </Container>
    </WrappedContainer>
  )
}

export default ProjectPage
