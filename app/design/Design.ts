import * as bootstrap from 'bootstrap/css/bootstrap.css';
import * as fontawesome from 'fontawesome/css/font-awesome.css';
import * as animate from 'css/utils/animate.css';
import * as theme from 'css/Theme.sass';
import DesignComposer from './DesignComposer';

/**
 * Created by Moises on 23/07/2017.
 */
export default class Design {

    public static an(...s: string[]): string {
        return new DesignComposer(s, animate, 'animated').toString();
    }

    public static fa(...s: string[]): string {
        return new DesignComposer(s, fontawesome, 'fa').toString();
    }

    public static bs(...s: string[]): string {
        return new DesignComposer(s, bootstrap).toString();
    }

    public static bsT(...s: string[]): string {
        return new DesignComposer(s, bootstrap, '', theme).toString();
    }

    public static bsTWith(...s: string[]): DesignComposer {
        return new DesignComposer(s, bootstrap, '', theme);
    }

    public static bsWith(...s: string[]): DesignComposer {
        return new DesignComposer(s, bootstrap);
    }
}
