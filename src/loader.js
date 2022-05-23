import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={650}
    viewBox="0  400 850"
    backgroundColor="#1d1933"
    foregroundColor="#6f4ef2"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="400" height="850" />
  </ContentLoader>
)

export default MyLoader