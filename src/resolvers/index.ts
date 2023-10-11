import path from 'path'
import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const resolversArray = loadFilesSync(path.join(__dirname, '.'))
const mergedResolvers = mergeResolvers(resolversArray)

export default mergedResolvers
