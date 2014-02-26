<?php
/**
 * DokuWiki Plugin alohaintegration (Helper Component)
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author  Oliver Kopp <kopp.dev@gmail.com>
 */

// must be run within Dokuwiki
if(!defined('DOKU_INC')) die();

class helper_plugin_alohaintegration extends DokuWiki_Plugin {

    /**
     * Return info about supported methods in this Helper Plugin
     *
     * @return array of public methods
     */
    public function getMethods() {
        function getMethods(){
            $result = array();
            $result[] = array(
                'name'   => 'registerOnLoad',
                'desc'   => 'register some javascript to the window.onload js event',
                'params' => array('js' => 'string'),
                'return' => array('html' => 'string'),
            );
            return $result;
        }
    }

    function registerOnLoad($js) {

    }

}

// vim:ts=4:sw=4:et:
