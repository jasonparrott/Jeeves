import { SpectrumUser } from 'spectrum-bot/lib/Spectrum/components/user.component';
import { aBotCommand } from 'spectrum-bot/lib/Spectrum/components/command.component';
import { receivedTextMessage } from 'spectrum-bot/lib/Spectrum/interfaces/receivedTextMessage.interface';
import { SpectrumLobby } from 'spectrum-bot/lib/Spectrum/components/lobby.component';
import { aSpectrumCommand } from 'spectrum-bot/lib/Spectrum/interfaces/command.interface';
import { DbStats } from '../_.commands';
import { pickRandom } from '../common/pickRandom';
import { GiftablesHelper } from '../common/giftables';

export class coffeeCommand implements aSpectrumCommand {
    public listenerID;
    public shortCode = "coffee"+GiftablesHelper.optTarget+"$";
    public callback = (message?:receivedTextMessage, lobby?:SpectrumLobby, matchs?:Array<any>) => {
        
        let username = GiftablesHelper.getTarget(message,matchs);
        let originalUser = new SpectrumUser(message.member);
        let messages = [
            "Certainly, would you like some suggar "+username+" :coffee: ?",
            "On my way "+username+" :coffee:, black as usual I assume ?",
            "I have it ready just the way you like "+username+". :coffee:",
            "I know you would ask and took the liberty of making some as you were away. :coffee:",
            "The finest beans I know of, :coffee: made especially for you "+username+".",
            "Here you go "+username+" :coffee: "+(GiftablesHelper.hasTarget(matchs) ? "Courtesy of the dear "+ originalUser.mention() +"." : ""),
            "One hot :coffee: for you, dear "+username+"."+(GiftablesHelper.hasTarget(matchs) ? "Courtesy of the dear "+ originalUser.mention() +"." : ""),
            ":coffee: Do call me back and I'll bring a second cup "+username,
            "Right on time as usual "+username+". You'll find biscuits on the platter. :coffee:",
            "Ask and you shall receive my dear "+username+". :coffee:",
        ];

        lobby.sendPlainTextMessage("[BOT] "+pickRandom(messages));

        GiftablesHelper.updateStatsForGiftable("coffee",message.member.displayname,username);
    };
    public name = "Serve Coffee";
    public manual = "Serves coffee.";
}
