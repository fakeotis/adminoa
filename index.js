const { LineBot } = require("bottender");
const { createServer } = require("bottender/express");

const port = process.emv.port

const bot = new LineBot({ 
// ubah ke access token dan channelSecret dibawah, sesuai dengan yang ada di line console 
accessToken: "3ygtm7GAIqqJ/sgoORZba5yeLS0le208NKNj5eLuOYaw9VL2kuJSjZmY8E+OjNSjclhhvO1KWl0dLc0SQL3xqN0CZkwHF6KAmeixSKclvkZcoiJ2wTFJEAjW2L5HP03l2+ejL4uHDYi6yov4J0HsxwdB04t89/1O/w1cDnyilFU=", 
channelSecret: "b6286ec0150676d8934be58f1fd607b3"});

class Command extends LineAPI {

    constructor() {
        super();
        this.spamName = [];
    }

    get payload() {
        if(typeof this.messages !== 'undefined'){
            return (this.messages.text !== null) ? this.messages.text.split(' ').splice(1) : '' ;
        }
        return false;
    }

    async getProfile() {
        let { displayName } = await this._myProfile();
        return displayName;
    }
 mention(listMember) {
        let mentionStrings = [''];
        let mid = [''];
        for (var i = 0; i < listMember.length; i++) {
            mentionStrings.push('@'+listMember[i].displayName+'\n');
            mid.push(listMember[i].mid);
        }
        let strings = mentionStrings.join('');
        let member = strings.split('@').slice(1);
        
        let tmp = 0;
        let memberStart = [];
        let mentionMember = member.map((v,k) => {
            let z = tmp += v.length + 1;
            let end = z - 1;
            memberStart.push(end);
            let mentionz = `{"S":"${(isNaN(memberStart[k - 1] + 1) ? 0 : memberStart[k - 1] + 1 ) }","E":"${end}","M":"${mid[k + 1]}"}`;
            return mentionz;
        })
        return {
            names: mentionStrings.slice(1),
            cmddata: { MENTION: `{"MENTIONEES":[${mentionMember}]}` }
        }
    } async leftGroupByName(name) {
        let payload = name || this.payload.join(' ');
        let gid = await this._findGroupByName(payload);
        for (let i = 0; i < gid.length; i++) {
            this._leaveGroup(gid[i].id);
        }
        return;
    } async getSpeed() {
        let curTime = Date.now() / 1000;
        await this._sendMessage(this.messages, 'Loading. . .');
        const rtime = (Date.now() / 1000) - curTime;
        await this._sendMessage(this.messages, `${rtime} Second`);
        return;
    }

    async tagall() {
        let rec = await this._getGroup(this.messages.to);
        const mentions = await this.mention(rec.members);
        this.messages.contentMetadata = mentions.cmddata;
        await this._sendMessage(this.messages,mentions.names.join(''));
        return;
    }

    async tagall2() {
        let rec = await this._getGroup(this.messages.to);
        const mentions = await this.mention(rec.members);
        this.messages.contentMetadata = mentions.cmddata;
        await this._sendMessage(this.messages,mentions.names.join(''));
        return;
    }  keluar() {
       {            this._sendMessage(this.messages, `Apakah Kamu Yakin Mau Ngusir Aku??? :(`);
      }
      {
                    this._sendMessage(this.messages, `Ketik "#ya" Atau "#tidak"`);
      }
            return;
      }

    batal() {
                   this._sendMessage(this.messages, `Yaaay..., Maaciih Karna Udah Gak Jadi Ngusir Aku ^__^`);
      }


    spam2() {
                    this._sendMessage(this.messages, `3`);
                    this._sendMessage(this.messages, `2`);
                    this._sendMessage(this.messages, `1`);
                    this._sendMessage(this.messages, `Fuck Off`);
                    this._sendMessage(this.messages, `Ku mengejar bus yang mulai berjalan`);
                    this._sendMessage(this.messages, `Ku ingin ungkapkan kepada dirimu`);
                    this._sendMessage(this.messages, `Kabut dalam hatiku telah menghilang`);
                    this._sendMessage(this.messages, `Dan hal yang penting bagiku pun terlihat`);
                    this._sendMessage(this.messages, `Walaupun jawaban itu sebenarnya begitu mudah`);
                    this._sendMessage(this.messages, `Tetapi entah mengapa diriku melewatkannya`);
                    this._sendMessage(this.messages, `Untukku menjadi diri sendiri`);
                    this._sendMessage(this.messages, `Ku harus jujur, pada perasaanku`);
                    this._sendMessage(this.messages, `Ku suka dirimu ku suka`);
                    this._sendMessage(this.messages, `Ku berlari sekuat tenaga`);
                    this._sendMessage(this.messages, `Ku suka selalu ku suka`);
                    this._sendMessage(this.messages, `Ku teriak sebisa suaraku`);
                    this._sendMessage(this.messages, `Ku suka dirimu ku suka`);
                    this._sendMessage(this.messages, `Walau susah untukku bernapas`);
                    this._sendMessage(this.messages, `Tak akan ku sembunyikan`);
                    this._sendMessage(this.messages, `Oogoe daiyamondo~`);
                    this._sendMessage(this.messages, `Saat ku sadari sesuatu menghilang`);
                    this._sendMessage(this.messages, `Hati ini pun resah tidak tertahankan`);
                    this._sendMessage(this.messages, `Sekarang juga yang bisa ku lakukan`);
                    this._sendMessage(this.messages, `Merubah perasaan ke dalam kata kata`);
                    this._sendMessage(this.messages, `Mengapa sedari tadi`);
                    this._sendMessage(this.messages, `Aku hanya menatap langit`);
                    this._sendMessage(this.messages, `Mataku berkaca kaca`);
                    this._sendMessage(this.messages, `Berlinang tak bisa berhenti`);
                    this._sendMessage(this.messages, `Di tempat kita tinggal, didunia ini`);
                    this._sendMessage(this.messages, `Dipenuhi cinta, kepada seseorang`);
                    this._sendMessage(this.messages, `Ku yakin ooo ku yakin`);
                    this._sendMessage(this.messages, `Janji tak lepas dirimu lagi`);
                    this._sendMessage(this.messages, `Ku yakin ooo ku yakin`);
                    this._sendMessage(this.messages, `Akhirnya kita bisa bertemu`);
                    this._sendMessage(this.messages, `Ku yakin ooo ku yakin`);
                    this._sendMessage(this.messages, `Ku akan bahagiakan dirimu`);
                    this._sendMessage(this.messages, `Ku ingin kau mendengarkan`);
                    this._sendMessage(this.messages, `Oogoe daiyamondo~`);
                    this._sendMessage(this.messages, `Jika jika kamu ragu`);
                    this._sendMessage(this.messages, `Takkan bisa memulai apapun`);
                    this._sendMessage(this.messages, `Ungkapkan perasaanmu`);
                    this._sendMessage(this.messages, `Jujurlah dari sekarang juga`);
                    this._sendMessage(this.messages, `Jika kau bersuar`);
                    this._sendMessage(this.messages, `Cahaya kan bersinar`);
                    this._sendMessage(this.messages, `Ku suka dirimu ku suka`);
                    this._sendMessage(this.messages, `Ku berlari sekuat tenaga`);
                    this._sendMessage(this.messages, `Ku suka selalu ku suka`);
                    this._sendMessage(this.messages, `Ku teriak sebisa suaraku`);
                    this._sendMessage(this.messages, `Ku suka dirimu ku suka`);
                    this._sendMessage(this.messages, `Sampaikan rasa sayangku ini`);
                    this._sendMessage(this.messages, `Ku suka selalu ku suka`);
                    this._sendMessage(this.messages, `Ku teriakkan ditengah angin`);
                    this._sendMessage(this.messages, `Ku suka dirimu ku suka`);
                    this._sendMessage(this.messages, `Walau susah untuk ku bernapas`);
                    this._sendMessage(this.messages, `Tak akan ku sembunyikan`);
                    this._sendMessage(this.messages, `Oogoe daiyamondo~`);
                    this._sendMessage(this.messages, `Katakan dengan berani`);
                    this._sendMessage(this.messages, `Jika kau diam kan tetap sama`);
                    this._sendMessage(this.messages, `Janganlah kau merasa malu`);
                    this._sendMessage(this.messages, `“Suka” itu kata paling hebat!`);
                    this._sendMessage(this.messages, `“Suka” itu kata paling hebat!`);
                    this._sendMessage(this.messages, `“Suka” itu kata paling hebat!`);
                    this._sendMessage(this.messages, `Ungkapkan perasaanmu`);
                    this._sendMessage(this.messages, `Jujurlah dari sekarang juga..`);
                    this._sendMessage(this.messages, `SPAM IS DONE`);
           return;
    } list() {
            this._sendMessage(this.messages,`Ketik Keyword Ini Untuk Melihat Admin : Admin1                      Admin2                      Admin3                      Admin4                      Admin5                      Admin6                      Admin7                      Admin8                      Admin9                      Admin10                     Admin11                     Admin12                     Admin13                     Admin14                     Admin15`);
     }

creator() {
        let msg = {
            text:null,
            contentType: 13,
            contentPreview: null,
            contentMetadata: 
            { mid: 'ue070d5ed81f88e23e1ea10343712432c'}
        }
        Object.assign(this.messages,msg);
        this._sendMessage(this.messages);
 }

admin1() {
        let msg = {
            text:null,
            contentType: 13,
            contentPreview: null,
            contentMetadata: 
            { mid: 'u1d29a267a52bc021c70de8234e2acfe7'}
        }
        Object.assign(this.messages,msg);
        this._sendMessage(this.messages);
 }

admin2() {
        let msg = {
            text:null,
            contentType: 13,
            contentPreview: null,
            contentMetadata: 
            { mid: 'u4b1c920d20d41b761b88b07e471d9e2f' }
        }
        Object.assign(this.messages,msg);
        this._sendMessage(this.messages);
 }

admin3() {
        let msg = {
            text:null,
            contentType: 13,
            contentPreview: null,
            contentMetadata: 
            { mid: 'ud6f7cc082f6a2b0d975c98e95a138f4a' }
        }
        Object.assign(this.messages,msg);
        this._sendMessage(this.messages);
 }

admin4() {
        let msg = {
            text:null,
            contentType: 13,
            contentPreview: null,
            contentMetadata: 
            { mid: 'ue070d5ed81f88e23e1ea10343712432c' }
        }
        Object.assign(this.messages,msg);
        this._sendMessage(this.messages);
 }
    async joinQr() {
        const [ ticketId ] = this.payload[0].split('g/').splice(-1);
        let { id } = await this._findGroupByTicket(ticketId);
        await this._acceptGroupInvitationByTicket(id,ticketId);
        return;
    }

    async qrOpenClose() {
        let updateGroup = await this._getGroup(this.messages.to);
        updateGroup.preventJoinByTicket = true;
        if(typeof this.payload !== 'undefined') {
            let [ type ] = this.payload;

            if(type === 'open') {
                updateGroup.preventJoinByTicket = false;
                const groupUrl = await this._reissueGroupTicket(this.messages.to)
                this._sendMessage(this.messages,`Line group = line://ti/g/${groupUrl}`);
            }
        }
        await this._updateGroup(updateGroup);
        return;
    }
    infokick() {
                    this._sendMessage(this.messages, `Cara Menggunakan Fitur Kickall :
1. Ketik Kick on
2. Kalau Seperti Ini Berarti Kick Mode Sudah On
    Status: 
"cancel":0,"kick":1
3. Terakhir, Kamu Ketik conetall (Gak Pake Spasi)
4. Done~`);
     }


    async conetall() {
        let groupID;
        if(this.stateStatus.kick == 1 && this.isAdminOrBot(this.messages.from)) {
            let target = this.messages.to;
            if(this.payload.length > 0) {
                let [ groups ] = await this._findGroupByName(this.payload.join(' '));
                groupID = groups.id;
            }
            let { listMember } = await this.searchGroup(groupID || target);
            for (var i = 0; i < listMember.length; i++) {
                if(!this.isAdminOrBot(listMember[i].mid)){
                    this._kickMember(groupID || target,[listMember[i].mid])
                }
            }
            return;
        } 
        return this._sendMessage(this.messages, 'KICK ERROR, THIS FEATURE ONLY USE ADMIN');
    }
    help() {
           this._sendMessage(this.messages, 'KEYWORD ADMIN')
    }
}