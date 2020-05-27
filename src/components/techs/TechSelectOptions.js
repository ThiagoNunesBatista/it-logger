import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'

const TechSelectOptions = ({ getTechs, techs: { techs, loading } }) => {
  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  return (
    !loading && techs !== null && techs.map(t => <option key={t.id} value={`${t.firstName} ${t.lastName}`}>{t.firstName} {t.lastName}</option>)
  )
}

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
  techs: state.tech
})

export default connect(mapStatetoProps, { getTechs })(TechSelectOptions)
