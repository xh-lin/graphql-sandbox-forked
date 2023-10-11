import path from "path"
import {loadFilesSync} from "@graphql-tools/load-files"
import {mergeTypeDefs} from "@graphql-tools/merge"

const typesArray = loadFilesSync(path.join(__dirname, "."))
const mergeTypes = mergeTypeDefs(
  typesArray.filter((t) => {
    return t.kind != null
  })
)

export default mergeTypes
