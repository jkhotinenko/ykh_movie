import React from 'react';
import css from './Header.module.css'
import {Link} from "react-router-dom";
import { Avatar , Grid, Button} from '@nextui-org/react';

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'



const Header = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    return (
        <div className={css.Header}>
            <div>
                <Grid.Container gap={2}>
                    <Grid>
                     <Link to={'/movies'}><Button color="primary" auto ghost>Movies</Button></Link>
                    </Grid>
                    <Grid>
                        <Link to={'/search'}><Button color="primary" auto ghost>Search</Button></Link>
                    </Grid>
                    <Grid>
                        <Link to={'/genres'}><Button color="primary" auto ghost>Genres</Button></Link>
                    </Grid>
                <Grid>
                    <Avatar  text="JK" size="md" />
                </Grid>

                    <Grid>
                    <Switch
                        checked={isDark}
                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}/>
                    </Grid>
                </Grid.Container>
            </div>
        </div>
    );
};

export {Header};