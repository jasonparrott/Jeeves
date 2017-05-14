import { GiftableCommand } from './_giftable';
import { SpectrumUser } from 'spectrum-bot/lib/Spectrum/components/user.component';
import { aBotCommand } from 'spectrum-bot/lib/Spectrum/components/command.component';
import { receivedTextMessage } from 'spectrum-bot/lib/Spectrum/interfaces/receivedTextMessage.interface';
import { SpectrumLobby } from 'spectrum-bot/lib/Spectrum/components/lobby.component';
import { aSpectrumCommand } from 'spectrum-bot/lib/Spectrum/interfaces/command.interface';
import { DbStats } from '../_.commands';
import { pickRandom } from '../common/pickRandom';
import { GiftablesHelper } from '../common/giftables';

export class WineCommand extends GiftableCommand {
    public listenerID;
    public shortCode = "wine";
    protected statName = "wine";
    public constructor() {
        super();
        this.registerShortCode(this.shortCode);
    }
    public messageToSend(originalUser: SpectrumUser, username: string, target: string, hasT: boolean) {
        let messages = [
            "Is the wine satisfactory " + username + " ? Shall I serve ? :wine_glass: ",
            "I know you have quite a palate " + username + ". Do tell if that bottle " + (hasT ? "courtesy of " + originalUser : "" + " is satisfactory."),
            "I took the liberty of opening a bottle of the old reserve. :wine_glass:" + (hasT ? ", courtesy of " + originalUser : ""),
            "It is one of the finest bottle we have, enjoy " + username + (hasT ? ". Courtesy of " + originalUser + " by the way." : "."),
        ];

        return pickRandom(messages);
    }
    public name = "Serve wine";
    public manual = "Serves wine.";
}