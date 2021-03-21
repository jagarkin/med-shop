import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  color: var(--bgd);
  align-items: center;
  justify-content: space-between;
  background-color: var(--txt);
`

export const Links = styled(NavLink)`
  margin: 0;
  font-size: 16px;
  color: var(--bgd);

  &:hover {
    color: var(--wht);
  }
`

export const LogginIcon = styled(AiOutlineUser)`
  font-size: 24px;
`
export const LoggoutIcon = styled(AiOutlineLogout)`
  font-size: 24px;
`
