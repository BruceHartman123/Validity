import { msg1 } from './msg_json/20110401_1000mercis_14461469_html.msg'
import { msg2 } from './msg_json/20110401_aamarketinginc_14456749_html.msg'
import { msg3 } from './msg_json/20110401_aeg_14465739_html.msg'
import { msg4 } from './msg_json/20110401_alchemyworx_14461429_multialt.msg'
import { msg5 } from './msg_json/20110401_americancollegiatemarketing_14461959_multialt.msg'
import { msg6 } from './msg_json/20110401_beliefnet_14461399_html.msg'

export const loadMsgFiles = (setEmailFiles) => {
  setEmailFiles([msg1, msg2, msg3, msg4, msg5, msg6])
  console.log("MSG file = " + msg1.From)
}