import styled from 'styled-components'
import { EditIcon } from '@tinacms/icons'
import { Button } from '../ui'

interface EditLinkProps {
  color?: 'white' | 'primary' | 'secondary' | 'seafoam' | 'variable'
  editMode: boolean
}
import { useGithubEditing } from 'react-tinacms-github'

export const EditLink = ({ color, editMode }: EditLinkProps) => {
  const openAuthoring = useGithubEditing()
  return (
    <EditToggleButton
      id="OpenAuthoringEditButton"
      color={color}
      onClick={
        editMode ? openAuthoring.exitEditMode : openAuthoring.enterEditMode
      }
    >
      <EditIcon /> {editMode ? 'Exit Edit Mode' : 'Edit This Site'}
    </EditToggleButton>
  )
}

interface EditToggleButtonProps {
  isEditMode: boolean
}

const EditToggleButton = styled(Button)``
