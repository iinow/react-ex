import { BaseConfig } from './webpack.base.config'
import { Rebpack } from './webpack.base.config'
import { merge } from 'webpack-merge'

const config: Rebpack = {
  mode: 'development'
}

//@ts-ignore
module.exports = merge(BaseConfig, config)
