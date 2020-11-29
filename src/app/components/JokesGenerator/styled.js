import styled from 'styled-components'
import Select from 'react-select'

export const StWrapper = styled.div`
  width: 100%;
  min-height: 627px;
  background-color: #282c34;
  color: yellow;
  font-size: 25px;
`
export const StSelect = styled(Select)`
  width: 35%;
  color: black;
`
export const StButton = styled.button`
  width: 20%;
  color: #eb5928;
  border: none;
  border-radius: 3px;
  font-size: 22px;
  font-weight: bold;
`
export const StInput = styled.input`
  width: 35%;
  border: none;
  border-radius: 3px;
  color: black;
  padding: 0 15px;
  font-size: 22px;
`
export const StControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`
export const StMainLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const StDisplayWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`
export const StIconWithTextBlock = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  font-size: 16px;
`
export const StTextBlock = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  border-radius: 5px;
  border: 3px solid black;
  padding: 5px;
  margin: 5px;
  font-size: 19px;
  color: antiquewhite;
  background-color: blue;
`
export const StUrlBlock = styled.div`
  display: flex;
  width: 400px;
  border-radius: 5px;
  min-height: 100%;
  font-size: 16px;
`
export const StIconBlock = styled.div`
  width: 100px;
  height: 100px;
  & img {
      width: 100px;
      height: 100px;
  }
`
