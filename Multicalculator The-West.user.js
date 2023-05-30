// ==UserScript==
// @name         Multiscript The-West
// @namespace    https://ra1g.eu
// @version      2.0.1
// @description  Multipurpose script for the online browser game The-West
// @author       ra1g
// @include      https://*.the-west.*/game.php*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAANgElEQVR4nN1beXBURRrvmXlfv8yEIwRCwpEICCIbIhhA0RURCHgAHiwsl8gaLgVhLVk5ahWFgohIRKpIDJQklqxCUFcExcUoyq6QAJKFoBbJLiLChkMQEIRwpbe+916/6Zl5R88AWd2v6vtj3vT1/d7X39X9CImRAOAFSilr3rw5q62tZUjHjh1jcXFxDJ9TSrcSQhpFO66qqncBwMeU0svGOE5cRikdRP4XRCkdwBeyZ88exiknJ0dc4K74+PhkySEbA8DbooBxcZTd1BnYA79T2KPjFfbQ7xXWrTswvz8CiL/HxcVdR+qYEimltbiAwsJCJtLixYuZqqp8cZvcBqKU3ggA33OBWrUBlpvnY1WHPOwUIxG8/0fCXn3dyzqkgwjCMVVVe5G6JAD4GicfN24cC6fevXvzhX0pIfxhbKuqlE2f5WOHf44U2op/vETYi4t9LD7eBOGMoii31xkAlNJlOHF6enqI8IcOHWKBQIAv6imHIQKU0q+wXYMGlK14x+sq9GfbPOzPc3xsz8Ggdny82cOSmgY1IRAINKsTAABgtP7mVHb06FETgNzcXL6YC042gFKaz1V42Qp34ZHRBmD7xMaULVziYycu688/2Og1NQEA1tYJAKqqtuUCrF271gRgxIgRriqJz7mlz56gSAmPnFfo1bSFz/tKQRC4WfN85nNFUXrUCQhg7N8ZM2aYAJSXl7Pk5GQTBFVV+4Z3o5RW4P9p1wE7cFJOeM7lVR6WdY/C6tWj7N2PggAcPks0A2powft1BcC7OGHPnj1D7MCuXbtYy5YtOQg1lNJ2vA+ldAZ/UzL73o6PXYh89lyOqQXnCSH1rzkAlNKncML69euzc+fOhYBQXFwsqqS2FVRVbUMp/Rmf9X9ATvVxf7+wyMeqT7u33VHpEV3j/dccAEVRbuUTbt68OQSA0aNHc3X8jhDixfYAsA6fNUygrOJbaz8fzk2S9PFbXw/s7Q+90u1R0645AERTAv2NLly40BT+1KlTLCEhgQMwxxB+KAdrXq5PWtWfnObTYgQeK3y0yRmEzG5mgJRH6giBz3HCQYMGmQBs3LjRVEUAyCGEJADAIfx9c1dgxy9Gt99R6PQM0DRn805nzbn1dhOAza6LB4DnDaM0mBASHwsAADAvPDGqqalhd955pwhCJY/vN26VU/1wRp+Plt6tnRAi1xBC4tzeHhP4JAJCCPFFAwCl9D6rxOj06dOsb9++IYnLY1PkDN/qD7xs+VteLdyNBqRDZ4jmHgXje4fj4lu2bMnS0tJCFgkAn6mqOtmwookSGDTiQU1RUVGIIfzpp59Y48aNtXFT0+R8/t6jHnPPozq7qbzIaz72hmeK0x1Xnpubqy20srKSDR482Crnvmikqb9x0YLd2H78+PEhACxYsIBF6/Pxrd8zQDH7YeT3zfdyIAx9ONhPKix+8MEHzcXi/p05c6YYxYlco6rqEw4AFGC7jh07muPt27fP9AT33S8f7iKfrCVs6Rte1qw5ZU2TKfvXYXcAvtzjMWsFKSkpfN0/EEI8tgAkJyezy5cvR6SzZ8+eZTt37mTTpk0zVdjgP1mNAwCjwhOjAQMGaH0SGlH21XexGT40ejIBEDKCjPM1adKErVy5UlzzjU6qyzBsdaKqqirWpUsXPtglq0TDiPDMxGj16tUsWp//erGXrfs0ttAYtxefD+MRjEP8fj/fBmMcAcjPz2duVF1dLcb25TZaUI3/T5w4kaWmprJofP6nZcEQdtBQhVVWy2sMGlY0sNgXX9SFCxe0NXft2pWPWegIwPDhw01Bz5w5w+6++27Wvn37CBZtg6Io3S0A0Gp6vBwWjc//7jhhGZ2CJS7MEn84LwcAulZ9vjhWWlpqyjJlyhQzBnEEIDU11ey0fft2KwMYwQDwB4uxnozF53M+WkO0ak/9+nrcb5XthTMCjEDjfJMnTw7RWsEO1BJCkmwBoJRq+5wbv3r16nEhN6AfxVAWAOZzNspcavhYiqLcwseT9fl2RU8MaNza4dbCLaZpTFoaO3HiRAgA+/fvF1/aA3YAXAqv7Pbo0YN3Wm2rOtZjTY/G56O/L1rlZWVfxeYh0Ljy+dDoWlHr1q35y1xgt+hybDBmzBiz09NPP807/UdWeKzLY/UH+2EQIyMAhrrYPhCgWsYn89Y5Y2DUKFEXvn///rbGWyjPWSdGALAIG9xwww1mp/fee89EVlXV1hZ9OgLAElVVrxeercf2mK3J+vxt33i0QIfP1bM3SAPAfT4GWhhw2dGSJUucEyNK6UN8AQcOHNA6HTlyRDR2Iy36FBv/v3UleT7ytz8Q9sgYRYv9b+8BUfv8l156iTnRjh07XBOjJvyEB60mpw4dOvCO+RYArDLAOWjk+Zr/79wl+jyf8+59HqkDEdHnZ2Zmmj5fJNTgsWPHaucTFy9eZImJiVyWaZbbgBqHE5MmTTIHmTBhAteAw2F1Ar94jIXJBvf5GMy4CXDkHGGFK722x16x+nyRMjIytDazZs3SfmNc41gppsYBRadOncxBtmzZIp7vaaewlNKBvPoTzrI+/9m5uuVu3ISyl/ODBxsyLPr8UaNG2ar9kCFDtDZZWVna79mzZzsnRgAwLDyRQZo+fbptICQcg0fl87GOj4EO7zv+CTngRJ+PjImWHS1atEhr07BhQ3b+/HlWUlLinBj5/f7mvMGaNWtCBlu+fDlr27atOUCrVq3Y0qVLGabR0fj88NL1XVm6Kg8bpUTt85GTkpIss1ikrVu3mu22bdsWnhhlW24DAKjCBlOnTrUc9ODBg1pkdenSJa3shecAseT5Yr6PARCGv25t0a1iSs0NLxeuoqLCcq1oGHkdAo/qkbp168ZBWW5nB5Zjg+7duzMnwqJJv379WDS1/YOnCCte540q0BF54ENmlecsAHTm0WtBQYHtOvv06aP1GTp0aHhitMfxpNfv97OTJ0/aDow1v2h9/qhsXYA2bYG9sz667SL6fF7f4+eKePBiR88884zWB1N4qcRIVdXWfKINGzZYDop3gFq0aKG16Zwpl60h4yUGXuRERusv0w8157pWpuHbje/JAOBVfNauXTtbANavX2/Oh7UMqcQIAPZjA0TPirKzs1k0Pl/kDz8LXmmZ9qwcAI9NMQ3fZUVRbhPWOZILg4JZEWa1AwcOZMOGDdPsVlhi9KKdHViBDXr16hUx4KZNm8y4ABcWy15Gg1eyxSMVLX6+PVjgDI9GA4FACo9ely1bxmRp5MiRronROGyAFh4R5ISnvngNJhqfjzE+nupGE+hY+Xw8TsNw2+Jl7cD/xaq2G+Xl5YmJUUQ9Awdtz1UL3zgnIZJib7wtZ8Qws8P2t90BbMuu6LZLzstBn4+Jlo22zsL/8S4SxvwyhBc3hMTot1bjevgB5rx587ROsfp8vPbCJ8N8f+0ncsB9vT/E53/kUH9I5e5w/vz5UgDIJkarscG9996r+XyMp7nPj6a2j4EO3uVLaaYLk18kBwBemjAW+LNVLSJsy67jrg6LuTLkmhipqvoENkCkXnvtNfMtzl0Ym+HDau+GLzwaIG5t//JupM93IuOiFQu/m+BEwnY+apcYZfBBuepfSZ4vy2hYsRRuzF3Bfb4b8UpU06ZNNX/vRmGJUXurMb2U0uNi4iHexHLjvELCHv+j3Dm+g8+Xvu0JADfhfUTsi2mwG2EwJ8g2yG7QNbzRLbdZl6kqq/V9Lj77pJQwr5cwQghbtTa2PB+jPFnhhfXO5evF7NWJMCji8QwAPOx48wsZb2eFL3jpG7qQnTIxYNGf4RZJv0l/npyiq/TV8vkSFMfzgwYNGmiHO3aE56CulylVVe3NG33xz0jL/0qBLiiyz6er/Izngs+KVsXs84fFILx4a/WEFqylppoHPeE0Z84cPt9xfNeWg+HNEL4oTEisFr5sBWFJTYNCc866R154WZ8f5VWdizgexv179+4NER4LKJhAGfO9bDsQADyqp8bU0X2hi3tkTCgAvfvhoQWJxee3uVIAjLUP5wESZq5lZWUhdU5B2zo6IYkFUC2FdStivF4cqQX+AGGz5+v7W9LnX9ULjQDwCPcMWBfkx354DcAxBuCER998caW77aM/NHQpzXSh0zPwZJewuLggEENGWPfDbSX4fDPPv5qkqmofbhOQ8f4TXgMwfpe69Y/Hy8bYeNGr9hHg2Im6oOj6Srboz8qrCLsrK7gdrqbPj5aM5O5LMaYx1L/EtTMAbNRqA1nWcQBWgwB0QbMfi/z/H+XWd3vwiw/B5xdcK+FDRYEcbhwNLpPplc3tAH6SYgXCzOd1NbfzFFY+n9/jvQKfHxMBwM2U0u0GAG/K9KEAcIBfVrwauQDe/rgaPv8KyIeXOLCoJNUahFPfcZNiq/9z/uvfvKbqYxpLfi1EKX2Tg4CXGGLRhJXve7V6giH89/iRJPkVkR8APuEg9OqrsJ3/liuMoG2YOtMnGr1jAJBJfoUUEDNEjBAfflRh75d4Lc/0Sys82geQzVsEDzONI3XH+8a/dPIoivI4pfSU6FPxpLd9B9C+5+t0s/5BQ5jfrTXO4+rM4l9rSqCUPovfAYUHGGF8llJahGd55P+VKKUdAGAspfQ5vDRlfDnylJFnR9bdf4H0X9/Vn9ePh1RUAAAAAElFTkSuQmCC
// @grant        none
// @license MIT
// ==/UserScript==

(function () {

    Multiscript = {
        sets: null,
        selectedSet: 0,
        lpSet: null,
        interSet: null,
        grindSet: null,
        travelSet: null,
        primarySet: null,
        secondarySet: null,
        // All job groups and their jobs for easier and faster manipulation
        jobGroups: [{"groupid": 1, "id": 20, "level": 8}, {"groupid": 1, "id": 39, "level": 30}, {
            "groupid": 1,
            "id": 51,
            "level": 34
        }, {"groupid": 1, "id": 52, "level": 41}, {"groupid": 1, "id": 198, "level": 227}, {
            "groupid": 1,
            "id": 205,
            "level": 241
        }, {"groupid": 2, "id": 58, "level": 44}, {"groupid": 2, "id": 66, "level": 57}, {
            "groupid": 2,
            "id": 108,
            "level": 80
        }, {"groupid": 2, "id": 114, "level": 89}, {"groupid": 2, "id": 161, "level": 151}, {
            "groupid": 2,
            "id": 201,
            "level": 233
        }, {"groupid": 3, "id": 7, "level": 3}, {"groupid": 3, "id": 26, "level": 21}, {
            "groupid": 3,
            "id": 31,
            "level": 13
        }, {"groupid": 3, "id": 42, "level": 23}, {"groupid": 3, "id": 127, "level": 2}, {
            "groupid": 3,
            "id": 195,
            "level": 219
        }, {"groupid": 4, "id": 46, "level": 33}, {"groupid": 4, "id": 47, "level": 26}, {
            "groupid": 4,
            "id": 101,
            "level": 65
        }, {"groupid": 4, "id": 102, "level": 68}, {"groupid": 4, "id": 106, "level": 77}, {
            "groupid": 4,
            "id": 194,
            "level": 217
        }, {"groupid": 5, "id": 25, "level": 13}, {"groupid": 5, "id": 32, "level": 17}, {
            "groupid": 5,
            "id": 40,
            "level": 22
        }, {"groupid": 5, "id": 85, "level": 40}, {"groupid": 5, "id": 179, "level": 187}, {
            "groupid": 5,
            "id": 184,
            "level": 197
        }, {"groupid": 6, "id": 18, "level": 8}, {"groupid": 6, "id": 56, "level": 42}, {
            "groupid": 6,
            "id": 105,
            "level": 74
        }, {"groupid": 6, "id": 109, "level": 81}, {"groupid": 6, "id": 117, "level": 93}, {
            "groupid": 6,
            "id": 118,
            "level": 94
        }, {"groupid": 7, "id": 2, "level": 3}, {"groupid": 7, "id": 4, "level": 3}, {
            "groupid": 7,
            "id": 5,
            "level": 3
        }, {"groupid": 7, "id": 8, "level": 5}, {"groupid": 7, "id": 128, "level": 1}, {
            "groupid": 7,
            "id": 162,
            "level": 153
        }, {"groupid": 8, "id": 6, "level": 4}, {"groupid": 8, "id": 12, "level": 6}, {
            "groupid": 8,
            "id": 14,
            "level": 7
        }, {"groupid": 8, "id": 15, "level": 7}, {"groupid": 8, "id": 98, "level": 43}, {
            "groupid": 8,
            "id": 163,
            "level": 155
        }, {"groupid": 9, "id": 86, "level": 37}, {"groupid": 9, "id": 87, "level": 10}, {
            "groupid": 9,
            "id": 91,
            "level": 15
        }, {"groupid": 9, "id": 95, "level": 28}, {"groupid": 9, "id": 97, "level": 39}, {
            "groupid": 9,
            "id": 176,
            "level": 181
        }, {"groupid": 10, "id": 9, "level": 6}, {"groupid": 10, "id": 27, "level": 12}, {
            "groupid": 10,
            "id": 55,
            "level": 41
        }, {"groupid": 10, "id": 99, "level": 50}, {"groupid": 10, "id": 115, "level": 91}, {
            "groupid": 10,
            "id": 191,
            "level": 211
        }, {"groupid": 11, "id": 35, "level": 16}, {"groupid": 11, "id": 48, "level": 32}, {
            "groupid": 11,
            "id": 88,
            "level": 24
        }, {"groupid": 11, "id": 110, "level": 82}, {"groupid": 11, "id": 182, "level": 193}, {
            "groupid": 11,
            "id": 188,
            "level": 205
        }, {"groupid": 12, "id": 1, "level": 4}, {"groupid": 12, "id": 10, "level": 5}, {
            "groupid": 12,
            "id": 22,
            "level": 9
        }, {"groupid": 12, "id": 29, "level": 12}, {"groupid": 12, "id": 130, "level": 1}, {
            "groupid": 12,
            "id": 175,
            "level": 179
        }, {"groupid": 13, "id": 23, "level": 8}, {"groupid": 13, "id": 30, "level": 14}, {
            "groupid": 13,
            "id": 92,
            "level": 6
        }, {"groupid": 13, "id": 96, "level": 36}, {"groupid": 13, "id": 172, "level": 173}, {
            "groupid": 13,
            "id": 186,
            "level": 201
        }, {"groupid": 14, "id": 13, "level": 7}, {"groupid": 14, "id": 17, "level": 9}, {
            "groupid": 14,
            "id": 24,
            "level": 15
        }, {"groupid": 14, "id": 41, "level": 20}, {"groupid": 14, "id": 189, "level": 207}, {
            "groupid": 14,
            "id": 196,
            "level": 221
        }, {"groupid": 15, "id": 60, "level": 53}, {"groupid": 15, "id": 70, "level": 67}, {
            "groupid": 15,
            "id": 78,
            "level": 87
        }, {"groupid": 15, "id": 181, "level": 191}, {"groupid": 15, "id": 185, "level": 199}, {
            "groupid": 15,
            "id": 199,
            "level": 229
        }, {"groupid": 16, "id": 73, "level": 75}, {"groupid": 16, "id": 74, "level": 83}, {
            "groupid": 16,
            "id": 77,
            "level": 86
        }, {"groupid": 16, "id": 123, "level": 98}, {"groupid": 16, "id": 190, "level": 209}, {
            "groupid": 16,
            "id": 197,
            "level": 225
        }, {"groupid": 17, "id": 34, "level": 31}, {"groupid": 17, "id": 50, "level": 35}, {
            "groupid": 17,
            "id": 63,
            "level": 50
        }, {"groupid": 17, "id": 83, "level": 72}, {"groupid": 17, "id": 116, "level": 92}, {
            "groupid": 17,
            "id": 183,
            "level": 195
        }, {"groupid": 18, "id": 72, "level": 69}, {"groupid": 18, "id": 75, "level": 76}, {
            "groupid": 18,
            "id": 122,
            "level": 97
        }, {"groupid": 18, "id": 124, "level": 99}, {"groupid": 18, "id": 202, "level": 235}, {
            "groupid": 18,
            "id": 204,
            "level": 238
        }, {"groupid": 19, "id": 69, "level": 60}, {"groupid": 19, "id": 71, "level": 63}, {
            "groupid": 19,
            "id": 80,
            "level": 66
        }, {"groupid": 19, "id": 104, "level": 73}, {"groupid": 19, "id": 121, "level": 96}, {
            "groupid": 19,
            "id": 177,
            "level": 183
        }, {"groupid": 20, "id": 16, "level": 10}, {"groupid": 20, "id": 57, "level": 71}, {
            "groupid": 20,
            "id": 59,
            "level": 45
        }, {"groupid": 20, "id": 61, "level": 47}, {"groupid": 20, "id": 76, "level": 79}, {
            "groupid": 20,
            "id": 168,
            "level": 165
        }, {"groupid": 21, "id": 79, "level": 62}, {"groupid": 21, "id": 107, "level": 78}, {
            "groupid": 21,
            "id": 111,
            "level": 84
        }, {"groupid": 21, "id": 113, "level": 88}, {"groupid": 21, "id": 125, "level": 100}, {
            "groupid": 21,
            "id": 187,
            "level": 203
        }, {"groupid": 22, "id": 19, "level": 19}, {"groupid": 22, "id": 65, "level": 55}, {
            "groupid": 22,
            "id": 67,
            "level": 59
        }, {"groupid": 22, "id": 68, "level": 58}, {"groupid": 22, "id": 203, "level": 237}, {
            "groupid": 23,
            "id": 36,
            "level": 21
        }, {"groupid": 23, "id": 54, "level": 48}, {"groupid": 23, "id": 64, "level": 54}, {
            "groupid": 23,
            "id": 112,
            "level": 85
        }, {"groupid": 23, "id": 180, "level": 189}, {"groupid": 23, "id": 192, "level": 213}, {
            "groupid": 24,
            "id": 33,
            "level": 14
        }, {"groupid": 24, "id": 38, "level": 25}, {"groupid": 24, "id": 45, "level": 27}, {
            "groupid": 24,
            "id": 90,
            "level": 51
        }, {"groupid": 24, "id": 100, "level": 56}, {"groupid": 24, "id": 167, "level": 163}, {
            "groupid": 25,
            "id": 21,
            "level": 11
        }, {"groupid": 25, "id": 28, "level": 11}, {"groupid": 25, "id": 37, "level": 18}, {
            "groupid": 25,
            "id": 43,
            "level": 28
        }, {"groupid": 25, "id": 44, "level": 38}, {"groupid": 25, "id": 165, "level": 159}, {
            "groupid": 26,
            "id": 53,
            "level": 49
        }, {"groupid": 26, "id": 84, "level": 46}, {"groupid": 26, "id": 119, "level": 90}, {
            "groupid": 26,
            "id": 120,
            "level": 95
        }, {"groupid": 26, "id": 126, "level": 66}, {"groupid": 26, "id": 166, "level": 161}, {
            "groupid": 27,
            "id": 3,
            "level": 4
        }, {"groupid": 27, "id": 11, "level": 5}, {"groupid": 27, "id": 93, "level": 4}, {
            "groupid": 27,
            "id": 94,
            "level": 5
        }, {"groupid": 27, "id": 129, "level": 2}, {"groupid": 27, "id": 164, "level": 157}, {
            "groupid": 28,
            "id": 49,
            "level": 29
        }, {"groupid": 28, "id": 62, "level": 52}, {"groupid": 28, "id": 82, "level": 64}, {
            "groupid": 28,
            "id": 103,
            "level": 70
        }, {"groupid": 28, "id": 169, "level": 167}, {"groupid": 28, "id": 200, "level": 231}, {
            "groupid": 29,
            "id": 134,
            "level": 104
        }, {"groupid": 29, "id": 140, "level": 110}, {"groupid": 29, "id": 148, "level": 118}, {
            "groupid": 29,
            "id": 151,
            "level": 121
        }, {"groupid": 29, "id": 152, "level": 122}, {"groupid": 29, "id": 174, "level": 177}, {
            "groupid": 30,
            "id": 138,
            "level": 108
        }, {"groupid": 30, "id": 149, "level": 119}, {"groupid": 30, "id": 150, "level": 120}, {
            "groupid": 30,
            "id": 155,
            "level": 125
        }, {"groupid": 30, "id": 158, "level": 128}, {"groupid": 30, "id": 171, "level": 171}, {
            "groupid": 31,
            "id": 133,
            "level": 103
        }, {"groupid": 31, "id": 143, "level": 113}, {"groupid": 31, "id": 144, "level": 114}, {
            "groupid": 31,
            "id": 157,
            "level": 127
        }, {"groupid": 31, "id": 160, "level": 130}, {"groupid": 31, "id": 193, "level": 215}, {
            "groupid": 32,
            "id": 131,
            "level": 101
        }, {"groupid": 32, "id": 137, "level": 107}, {"groupid": 32, "id": 141, "level": 111}, {
            "groupid": 32,
            "id": 153,
            "level": 123
        }, {"groupid": 32, "id": 156, "level": 126}, {"groupid": 32, "id": 178, "level": 185}, {
            "groupid": 33,
            "id": 132,
            "level": 102
        }, {"groupid": 33, "id": 136, "level": 106}, {"groupid": 33, "id": 145, "level": 115}, {
            "groupid": 33,
            "id": 147,
            "level": 117
        }, {"groupid": 33, "id": 154, "level": 124}, {"groupid": 33, "id": 173, "level": 175}, {
            "groupid": 34,
            "id": 135,
            "level": 105
        }, {"groupid": 34, "id": 139, "level": 109}, {"groupid": 34, "id": 142, "level": 112}, {
            "groupid": 34,
            "id": 146,
            "level": 116
        }, {"groupid": 34, "id": 159, "level": 129}, {"groupid": 34, "id": 170, "level": 169}],
        townLog: {
            logs: null,
            currentTownLogPage: 1,
            lastTownLogPage: 1,
            allLoadedLogs: [],
        },
        dropChance: {
            baseDrop: 0,
            fullPickaxe: false,
            gearAndBuffBonus: 0,
            worldBonus: 1,
            higherIncome: false,
            isAdventurer: false,
            isSilver: false,
            isGold: false,
        },
        moneyCalc: {
            baseMoney: 0,
            gearAndBuffBonus: 0,
            worldBonus: 1,
            isSilver: false,
            isGold: false,
            higherIncome: false,
        },
        xpCalc: {
            baseXp: 0,
            gearAndBuffBonus: 0,
            worldBonus: 1,
            isSilver: false,
            isGold: false,
        },
        hpRegenCalc: {
            maximumHp: "",
            currentHp: "",
            targetHp: "",
            regenBonus: 0,
            /*sleepingAccomodation: [{
                hotel: [{
                    level1: 0.001333333,
                    level2: 0.0015,
                    level3: 0.00166667,
                    level4: 0.00183333,
                    level5: 0.002,
                },],
                barracks: [{
                    level1: 0.0018417,
                    level2: 0.00235,
                    level3: 0.0025,
                    level4: 0.0026333,
                    level5: 0.0027667,
                    level6: 0.0027667,
                },],
            },],*/
            selectedAccomodation: -1,
        },
        settings: {
            showChurchUnderBuffBars: false,
            showLogOutNextToBuffBar: true,
            showEventSendAllButtonNextToBuffBar: false,
            showMultiscriptButtonLeft: true,
            showMultiscriptButtonRight: false,
        },
        whichToCancel: [],
    }

    // For compression of data
    // SOURCE: https://github.com/pieroxy/lz-string
    var LZString = function () {
        var r = String.fromCharCode, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", e = {};

        function t(r, o) {
            if (!e[r]) {
                e[r] = {};
                for (var n = 0; n < r.length; n++) e[r][r.charAt(n)] = n
            }
            return e[r][o]
        }

        var i = {
            compressToBase64: function (r) {
                if (null == r) return "";
                var n = i._compress(r, 6, function (r) {
                    return o.charAt(r)
                });
                switch (n.length % 4) {
                    default:
                    case 0:
                        return n;
                    case 1:
                        return n + "===";
                    case 2:
                        return n + "==";
                    case 3:
                        return n + "="
                }
            }, decompressFromBase64: function (r) {
                return null == r ? "" : "" == r ? null : i._decompress(r.length, 32, function (n) {
                    return t(o, r.charAt(n))
                })
            }, compressToUTF16: function (o) {
                return null == o ? "" : i._compress(o, 15, function (o) {
                    return r(o + 32)
                }) + " "
            }, decompressFromUTF16: function (r) {
                return null == r ? "" : "" == r ? null : i._decompress(r.length, 16384, function (o) {
                    return r.charCodeAt(o) - 32
                })
            }, compressToUint8Array: function (r) {
                for (var o = i.compress(r), n = new Uint8Array(2 * o.length), e = 0, t = o.length; e < t; e++) {
                    var s = o.charCodeAt(e);
                    n[2 * e] = s >>> 8, n[2 * e + 1] = s % 256
                }
                return n
            }, decompressFromUint8Array: function (o) {
                if (null == o) return i.decompress(o);
                for (var n = new Array(o.length / 2), e = 0, t = n.length; e < t; e++) n[e] = 256 * o[2 * e] + o[2 * e + 1];
                var s = [];
                return n.forEach(function (o) {
                    s.push(r(o))
                }), i.decompress(s.join(""))
            }, compressToEncodedURIComponent: function (r) {
                return null == r ? "" : i._compress(r, 6, function (r) {
                    return n.charAt(r)
                })
            }, decompressFromEncodedURIComponent: function (r) {
                return null == r ? "" : "" == r ? null : (r = r.replace(/ /g, "+"), i._decompress(r.length, 32, function (o) {
                    return t(n, r.charAt(o))
                }))
            }, compress: function (o) {
                return i._compress(o, 16, function (o) {
                    return r(o)
                })
            }, _compress: function (r, o, n) {
                if (null == r) return "";
                var e, t, i, s = {}, u = {}, a = "", p = "", c = "", l = 2, f = 3, h = 2, d = [], m = 0, v = 0;
                for (i = 0; i < r.length; i += 1) if (a = r.charAt(i), Object.prototype.hasOwnProperty.call(s, a) || (s[a] = f++, u[a] = !0), p = c + a, Object.prototype.hasOwnProperty.call(s, p)) c = p; else {
                    if (Object.prototype.hasOwnProperty.call(u, c)) {
                        if (c.charCodeAt(0) < 256) {
                            for (e = 0; e < h; e++) m <<= 1, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
                            for (t = c.charCodeAt(0), e = 0; e < 8; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                        } else {
                            for (t = 1, e = 0; e < h; e++) m = m << 1 | t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
                            for (t = c.charCodeAt(0), e = 0; e < 16; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                        }
                        0 == --l && (l = Math.pow(2, h), h++), delete u[c]
                    } else for (t = s[c], e = 0; e < h; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                    0 == --l && (l = Math.pow(2, h), h++), s[p] = f++, c = String(a)
                }
                if ("" !== c) {
                    if (Object.prototype.hasOwnProperty.call(u, c)) {
                        if (c.charCodeAt(0) < 256) {
                            for (e = 0; e < h; e++) m <<= 1, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
                            for (t = c.charCodeAt(0), e = 0; e < 8; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                        } else {
                            for (t = 1, e = 0; e < h; e++) m = m << 1 | t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
                            for (t = c.charCodeAt(0), e = 0; e < 16; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                        }
                        0 == --l && (l = Math.pow(2, h), h++), delete u[c]
                    } else for (t = s[c], e = 0; e < h; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                    0 == --l && (l = Math.pow(2, h), h++)
                }
                for (t = 2, e = 0; e < h; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                for (; ;) {
                    if (m <<= 1, v == o - 1) {
                        d.push(n(m));
                        break
                    }
                    v++
                }
                return d.join("")
            }, decompress: function (r) {
                return null == r ? "" : "" == r ? null : i._decompress(r.length, 32768, function (o) {
                    return r.charCodeAt(o)
                })
            }, _decompress: function (o, n, e) {
                var t, i, s, u, a, p, c, l = [], f = 4, h = 4, d = 3, m = "", v = [],
                    g = {val: e(0), position: n, index: 1};
                for (t = 0; t < 3; t += 1) l[t] = t;
                for (s = 0, a = Math.pow(2, 2), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                switch (s) {
                    case 0:
                        for (s = 0, a = Math.pow(2, 8), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                        c = r(s);
                        break;
                    case 1:
                        for (s = 0, a = Math.pow(2, 16), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                        c = r(s);
                        break;
                    case 2:
                        return ""
                }
                for (l[3] = c, i = c, v.push(c); ;) {
                    if (g.index > o) return "";
                    for (s = 0, a = Math.pow(2, d), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                    switch (c = s) {
                        case 0:
                            for (s = 0, a = Math.pow(2, 8), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                            l[h++] = r(s), c = h - 1, f--;
                            break;
                        case 1:
                            for (s = 0, a = Math.pow(2, 16), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                            l[h++] = r(s), c = h - 1, f--;
                            break;
                        case 2:
                            return v.join("")
                    }
                    if (0 == f && (f = Math.pow(2, d), d++), l[c]) m = l[c]; else {
                        if (c !== h) return null;
                        m = i + i.charAt(0)
                    }
                    v.push(m), l[h++] = i + m.charAt(0), i = m, 0 == --f && (f = Math.pow(2, d), d++)
                }
            }
        };
        return i
    }();
    "function" == typeof define && define.amd ? define(function () {
        return LZString
    }) : "undefined" != typeof module && null != module ? module.exports = LZString : "undefined" != typeof angular && null != angular && angular.module("LZString", []).factory("LZString", function () {
        return LZString
    });

    // Check if number is a valid integer
    Multiscript.isValidNumber = function (num) {
        return Number.isInteger(parseInt(num));
    };

    // ========================== Multiscript window manipulation ========================== \\
    // ICON FROM: <a href="https://icons8.com/icon/46860/swiss-army-knife">Swiss Army Knife icon by Icons8</a>
    Multiscript.createMenuIcon = function () {
        let menuImage64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFR0lEQVR4nKWVe0xTdxTHfy33d29vL+0t3NsHvS0v3yR7CBMMdY6JcQSnIZEEdW4oZHGYzf3jRpY5k0UbszDjH+A08zHnAjMOtsTJNMZJgvMRt+FrERRx4OTho6W9LUKp9Cy/1j4umoXFk5w/+vv9cj73nO85pwg9wxiGeaOkpMQ9MDAAVqtV1mq1JYn3FEXlZ2Xjf+bm4UDFW1Rw4etUwGTB93ger0P/w3hBEPwAAPv27YO0tLSWBEBB1jQ8dvKsCryAwn6lRwWXb6kgLx/LoonePGWKyWT6u7u7G6qqqkZ0Ot0XT471Vgn7zl6OA4hvcSbBq0UY+mUE6ZmMj2GY6VOCmM3mg4cOHQKXywWSJPkxxnMzs6im2i1JCgABekII7nojv+vqcchkZuqmBMEYr167dq0syzLwPD9CUdTCGbPw+NCjOIB4WTkFGzfFwSfOqGD2HPGqIpjNZrtgMBg+IeVOPNdoNBnZ2dmeYDAIpaWlsk7HBH7+VR0L9iCAoP3PSNnujcahP55QgyFFN4oQUsWC7d69G1asWOHneV62WCwnaZqeFb1LTU11k3Lt3OmEVe9QocQMel0Icudh+PZIHEx8/ft6YBgmRNP0nBikvr5+gnTRyMgINDU1hYxG40ONRpNO7qxW63HyERmZ2ome+3Gxbwyo4I+uiBbux3HA750qmD7DAtXV1Y8Yhnk3Blm6dKnb4/FAcXGxXFhY6DKbzaPJyclh4ViW3chxbKhhv/Jrf7ukgukzcbhto2cEWFScCs3NR6ClpYXMV6ztkSAIvvHxcdDr9WMURc3HGOeRSpE7rRZXLXgNPyYBosGIDiSTRCjxXQcoWLa8iBQFBgcHQRTFwRjEYrHc7OrqgoKCAjdFUfOeiL6JZVmJzMTF68qA3zWr4cWXcfjLo2c99xFkZadCb28vRE2SJJnjOFNU3Ia9e/eGtm7dGuB5/iutVmvhOG6Y53HX5Jlo/kUNAz5lBsRXrtGMfbljezh4Z2cn1NTUQEVFhYem6bIwhKbp5eXl5e7h4WFYvHixLIriI4fD8XjaDBycPBNbnEmwZh2lODt2Wg00TYdaW1vDEJ/PB+np6bBnz56QKIoNsU5NS0vzRtMk+uTm2eHoqbjYD8cRfHNYDa6gEkrmIyMTywzDfF9bWzsajZGfnw8EKklSZ+IK6evr6ws/qKv7HFZX0opgZPBIBjt2Kcv38eakMbOZPkhR1Cu5ubnuKKShoQE6OjogJSXFTyQOQ4xG4/7GxkYgoKxsDhJn4vodFRw+qmxhLyDouKkCQcAPEUIGMt2CIDzo7++HRCsqKiLNtCCqS3llZaXnzWX5MHkmbg6qYEkpBW0XlTMxbz6WOQ5XRKtB6r9t27ZAIsTpdAb1ev2n4Qccx5mTk5ODjoWsojWJBpe6n+6mXQfUEyYzPpO460i7iqLoHRoaikHa2trAbrefjj2S7Cmuxp8iWWzfieCHVtJNCNZ/oAT03EdgNIXFzpy8uQ0Gw4cOh0MOBCIJtbe3g81ma4s9mDlbc+/q7UhJzl1B8FIuAowRnL+mhJSvovyGVDpSgmeYyWQ6WFZW5ie7cMOGDX6GYd6LQ2ZRN6Krm/iiJQhWvo1AsiO48Fd8JkQjvj35b2GSJYmiWJ+TkyNnZGT4aJrOiZcrna79aHOkRe8MI6iuia90ok10Jsh+Q1MwlmXLdDrdAMuyVkVJM7MY76nzTy+/4QkEqyupEaOZ+noqgP80jPELoki7aj/D4+euqKDrrgpajqthfiHlNVnwMdLtzw15YoIgYKdVoq9JNnzLno5bGYZZ9DwR/wWDNslm7LovXgAAAABJRU5ErkJggg==';
        let menuDiv = $('<div class="ui_menucontainer" />');
        let openCalc = $('<div id="Multiscript" class="menulink" onclick=Multiscript.openWindow(); title="Multiscript" />').css('background-image', 'url(' + menuImage64 + ')');
        $('#ui_menubar').append((menuDiv).append(openCalc).append('<div class="menucontainer_bottom" />'));
    };
    Multiscript.selectTab = function (key) {
        Multiscript.window.tabIds[key].f(Multiscript.window, key);
    };
    Multiscript.removeActiveTab = function (window) {
        $('div.tw2gui_window_tab', window.divMain).removeClass('tw2gui_window_tab_active');
    };
    Multiscript.addActiveTab = function (key, window) {
        $('div._tab_id_' + key, window.divMain).addClass('tw2gui_window_tab_active');
    };
    Multiscript.removeWindowContent = function () {
        $(".Multiscriptwindow").remove();
    };
    Multiscript.openWindow = async function () {
        let window = wman.open("Multiscript").setResizeable(false).setMinSize(650, 480).setSize(650, 480).setMiniTitle("Multiscript");
        let tabs = {
            "generalsettings": "Settings",
            "townlog": "Town Log",
            "mDialog": "Quick Features",
            "setManager": "Set Manager",
            "xpCalc": "XP",
            "moneyCalc": "Money",
            "productDrop": "Product",
            "hpRegen": "Health",
        };
        let switchTabs = async function (win, id) {
            let content = $('<div class=\'Multiscriptwindow\'/>');
            switch (id) {
                case "xpCalc":
                    Multiscript.removeActiveTab(this);
                    Multiscript.removeWindowContent();
                    Multiscript.addActiveTab("xpCalc", this);
                    content.append(Multiscript.createXpScreen());
                    Multiscript.window.appendToContentPane(content);
                    break;
                case "moneyCalc":
                    Multiscript.removeActiveTab(this);
                    Multiscript.removeWindowContent();
                    Multiscript.addActiveTab("moneyCalc", this);
                    content.append(Multiscript.createMoneyScreen());
                    Multiscript.window.appendToContentPane(content);
                    break;
                case "hpRegen":
                    Multiscript.removeActiveTab(this);
                    Multiscript.removeWindowContent();
                    Multiscript.addActiveTab("hpRegen", this);
                    content.append(Multiscript.createHealthRegenScreen());
                    Multiscript.window.appendToContentPane(content)
                    break;
                case "productDrop":
                    Multiscript.removeActiveTab(this);
                    Multiscript.removeWindowContent();
                    Multiscript.addActiveTab("productDrop", this);
                    content.append(Multiscript.createProductDropScreen());
                    Multiscript.window.appendToContentPane(content);
                    break;
                case "townlog":
                    Multiscript.removeActiveTab(this);
                    Multiscript.removeWindowContent();
                    Multiscript.addActiveTab("townlog", this);
                    content.append(await Multiscript.createTownLogEnhancedScreen());
                    Multiscript.window.appendToContentPane(content);
                    if (Multiscript.townLog.allLoadedLogs.length > 0) {
                        await Multiscript.rerenderTable(true);
                    } else {
                        await Multiscript.rerenderTable();
                    }
                    break;
                case "generalsettings":
                    Multiscript.removeActiveTab(this);
                    Multiscript.removeWindowContent();
                    Multiscript.addActiveTab("generalsettings", this);
                    content.append(Multiscript.createGeneralSettingsScreen());
                    Multiscript.window.appendToContentPane(content);
                    break;
                case "mDialog":
                    Multiscript.removeActiveTab(this);
                    Multiscript.removeWindowContent();
                    Multiscript.addActiveTab("mDialog", this);
                    content.append(Multiscript.createMultiscriptQuickFeaturesScreen());
                    Multiscript.window.appendToContentPane(content);
                    break;
                case "setManager":
                    await Multiscript.loadSets(true);
                    Multiscript.removeActiveTab(this);
                    Multiscript.removeWindowContent();
                    Multiscript.addActiveTab("setManager", this);
                    content.append(Multiscript.createSetManagerScreen());
                    Multiscript.window.appendToContentPane(content);
                    break;
            }
        }
        for (let tab in tabs) {
            window.addTab(tabs[tab], tab, switchTabs);
        }
        Multiscript.window = window;
        Multiscript.selectTab("generalsettings");
    };

    // ========================== Multiscript window manipulation ========================== \\

    // Job Protection
    Multiscript.jobProtection = function () {
        if(Multiscript.primarySet == null || Multiscript.secondarySet == null){
            new UserMessage("Please select a primary & secondary set in settings", UserMessage.TYPE_ERROR).show();
        } else {
            let onlyJobs = (TaskQueue.queue).filter(function (item) {
                return (item.type == "job" && item.data.duration == 3600);
            });
            if(onlyJobs.length > 0){
                console.log("Multiscript JP: qualified job found, starting jobprotection. Job end: "+Math.floor(onlyJobs[0].data.date_done));
                Multiscript.runBeforeAndAfterJob(Math.floor(onlyJobs[0].data.date_done));
            } else {
                console.log("Multiscript JP: no more qualified jobs! Protection ended.");
                new UserMessage("No qualified jobs to protect (min. 1 hour job)", UserMessage.TYPE_ERROR).show();
                return false;
            }
        }
    };
    Multiscript.runBeforeAndAfterJob = function (timeJobEnd) {
        //let endInMinutes = parseInt(Math.abs((Date.now() - timeJobEnd)/1000/60).toFixed(0)); // when jobs ends relative to current time, in minutes
        // execute based on job end time:
        let executeIn = (timeJobEnd-25000) - Date.now();
        console.log("Multiscript JP: set will be switched at: "+executeIn);
        setTimeout(function() {
            EquipManager.switchEquip(Multiscript.secondarySet);
            console.log("Multiscript JP: switched to secondary set before job end");
        }, executeIn);

        setTimeout(function() {
            EquipManager.switchEquip(Multiscript.primarySet);
            console.log("Multiscript JP: switched to primary set after job end");
            Multiscript.jobProtection();
            console.log("Multiscript JP: started recursion");
        }, (timeJobEnd+5000) - Date.now());
    };

    // Automatically deposit 1$ to bank if bank window is open
    Multiscript.autoBankDeposit = async function (howManyDeposits, sum) {
        if(Character.homeTown.town_id != 0 && Character.calcWayTo(Character.homeTown.x, Character.homeTown.y) == 0){
            let playerMoney = Character.money;
            let calcAmountOfDeposits = Math.floor(playerMoney/sum) < howManyDeposits ? Math.floor(playerMoney/sum) : howManyDeposits;
            console.log("Starting to deposit "+calcAmountOfDeposits+"x times to bank.");
            for (let i = 1; i <= calcAmountOfDeposits; i++) {
                await new Promise(r => setTimeout(r, 1560));
                Ajax.remoteCall("building_bank", "deposit", {
                    town_id: Character.homeTown.town_id,
                    amount: sum
                }, function (data) {
                    if (data.error == false) {
                        console.log("Done deposit number #"+i);
                    } else new UserMessage(data.msg, UserMessage.TYPE_ERROR).show();
                },);
                await new Promise(r => setTimeout(r, 1425));
                if(i==calcAmountOfDeposits){
                    new UserMessage(i+"x deposits finished! ($"+Math.floor(i*sum)+")", UserMessage.TYPE_SUCCESS).show();
                }
            }
        }
    };

    // Select travel set in market window
    Multiscript.travelSetInMarketWindow = {
        init() {
            let observer = new MutationObserver(function (mutations) {
                let equipButton = $('<button onclick="Multiscript.travelSetInMarketWindow.equipSet()" id="equipTravelSetMarket" style="width: 120px;z-index: 9999;position: relative;height: 25px;float: right;left: -50px;top: 15px;">Equip Travel set</button>');
                mutations.forEach(function (mutation) {
                    if(mutation.addedNodes[0] == undefined) return;
                    if (mutation.addedNodes[0].className.includes("marketplace")) {
                        let windowRight = $('.marketplace .tw2gui_inner_window_title_right');
                        windowRight.append(equipButton);
                    } else {
                        if(mutation.addedNodes[0] == undefined){
                            equipButton.remove();
                        }
                    }
                });
            });
            observer.observe(document.querySelector("#windows"), {
                attributes: true,
                attributeFilter: ['class'],
                childList: true,
            });
        },
        equipSet() {
            if (Multiscript.travelSet == null || Multiscript.travelSet == -1) {
                new UserMessage("Save a travel set first in settings!", UserMessage.TYPE_ERROR).show();
            } else {
                EquipManager.switchEquip(Multiscript.travelSet);
            }
        },
    };

    // sort duel ranking by # of duels won
    Multiscript.sortDuelsByWins = async function (numOfPages) {
        let ranks = [];
        let winsArray = [];
        for (let i = 1; i <= numOfPages; i++) {
            await new Promise(r => setTimeout(r, 250));
            Ajax.remoteCallMode('ranking', 'get_data', {page: i, tab: "duels"}, function (json) {
                ranks.push(json.ranking);
            });
            await new Promise(r => setTimeout(r, 1200));
        }
        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < ranks[i].length; j++) {
                winsArray.push(ranks[i][j].duel_win);
            }
        }
        winsArray.sort((a, b) => b - a);
        for (let i = 0; i < winsArray.length; i++) {
            console.log(`Rank ${i + 1}, duel wins: ${winsArray[i]} `);
        }
    };

    // Show in FF window if arrow for swap is green or not
    Multiscript.showIfSwapGreen = function () {
        // document.querySelector(".fortbattle").childNodes[9] // FF Window title
        // document.querySelector(".battleground_thick_arrow").childNodes[0].className.includes("swapping");
        // if class "swapping" is there && arrow is set on someone ===> arrow is green
        try {
            let arrowDiv = document.createElement("div");
            document.querySelector(".fortbattle").childNodes[9].appendChild(arrowDiv);
            let observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.target.className.includes("swapping")) {
                        console.log("if you are set on a player, arrow is green, if on self, ignore");
                        arrowDiv.innerHTML = '<span style="font-weight: bold; color: limegreen; font-size: medium; position:absolute; top: 35px; left: 550px;">ARROW IS GREEN</span>';
                    } else {
                        arrowDiv.innerHTML = '<span style="font-weight: lighter; color: red; font-size: medium; position:absolute; top: 35px; left: 550px;">ARROW IS RED</span>';
                        console.log("no swap / red");
                    }
                });
            });
            if (document.querySelector(".fort_battle_round_info") != null) {
                // FF is in progress
                console.log("ff window");
                observer.observe(document.querySelector(".battleground_thick_arrow").childNodes[0], {
                    attributes: true,
                    attributeFilter: ['class']
                });
            } else {
                console.log("not ff window");
                observer.disconnect();
            }
        } catch (e) {
            console.log("Multiscript error ==== no active ff, can not watch for arrow! Error: " + e);
        }
    };

    // Set manager screen
    Multiscript.createSetManagerScreen = function () {

        if (Multiscript.sets.length == 0) {
            return $("<span style=\'font-size:20px'\>You have no saved sets</span>");
        }
        if (Multiscript.sets[Multiscript.selectedSet] == undefined) {
            Multiscript.selectedSet = 0;
            return $("<span style=\'font-size:20px'\>Wrong set</span>");
        }
        let htmlSkel = $("<div id =\'orangoreloaded_sets_window'\ style=\'display:block;position:relative;width:650px;height:430px;'\><div id=\'multiscript_sets_left' style=\'display:block;position:absolute;width:320px;height:430px;top:0px;left:0px'\></div><div id=\'multiscript_sets_right' style=\'display:block;position:absolute;width:300px;height:410px;top:0px;left:380px'\></div></div>");
        let combobox = new west.gui.Combobox("combobox_sets");
        Multiscript.addSetsToCombobox(combobox);
        combobox = combobox.select(Multiscript.selectedSet);
        combobox.addListener(function (value) {
            Multiscript.selectedSet = value;
            Multiscript.selectTab("setManager");
        });
        let buttonEquipSet = new west.gui.Button("Equip " + Multiscript.sets[Multiscript.selectedSet].name, function () {
            //let thisSet = Multiscript.sets.filter(function (set){return set.name == Multiscript.selectedSet});
            try {
                EquipManager.switchEquip(Multiscript.sets[Multiscript.selectedSet].equip_manager_id);
                Multiscript.selectTab("setManager");
                Multiscript.selectedSet = Multiscript.selectedSet;
            } catch (e) {
                new UserMessage("Could not equip set!", UserMessage.TYPE_ERROR).show();
            }

        });
        let buttonReplaceSet = new west.gui.Button("Replace " + Multiscript.sets[Multiscript.selectedSet].name, async function () {
            //let thisSet = Multiscript.sets.filter(function (set){return set.name == Multiscript.selectedSet});
            try {
                EquipManager.replaceEquip(Multiscript.sets[Multiscript.selectedSet].equip_manager_id);
                await new Promise(r => setTimeout(r, 250));
                Multiscript.selectTab("setManager");
                Multiscript.selectedSet = 0;
            } catch (e) {
                new UserMessage("Could not replace set!", UserMessage.TYPE_ERROR).show();
            }
        });
        let buttonDeleteSet = new west.gui.Button("Delete " + Multiscript.sets[Multiscript.selectedSet].name, async function () {
            //let thisSet = Multiscript.sets.filter(function (set){return set.name == Multiscript.selectedSet});
            try {
                EquipManager.deleteEquip(Multiscript.sets[Multiscript.selectedSet].equip_manager_id);
                new UserMessage("Set has been deleted!", UserMessage.TYPE_SUCCESS).show();
            } catch (e) {
                new UserMessage("Could not delete set!", UserMessage.TYPE_ERROR).show();
            } finally {
                await new Promise(r => setTimeout(r, 250));
                Multiscript.selectTab("setManager");
                Multiscript.selectedSet = 0;
            }
        });
        let buttonAddNew = new west.gui.Button("Saved equipped items as a set", async function () {
            let el = $("<div></div>");
            let randomPlaceholders = ["xp grind set", "money fiesta", "FF Attack", "trainz ftw", "randomSet4", "i am speed", "i dont know", "300% xp", "brookie", "best drop", "duel??"]
            let setNameField = new west.gui.Textfield("newSetName").setPlaceholder(randomPlaceholders[Math.floor(Math.random() * (randomPlaceholders.length - 0 + 1)) + 0]);
            let htmlSetNameField = $("<div></div>");
            htmlSetNameField.append("<span> Insert new set name:</span>");
            setNameField.setWidth(100);
            htmlSetNameField.append(setNameField.getMainDiv());
            el.append(htmlSetNameField);
            new west.gui.Dialog("Set Manager", el).setIcon(west.gui.Dialog.SYS_QUESTION).setDraggable(true)
                .setModal(false, false, false)
                .addButton('yes', function () {
                    Ajax.remoteCall('inventory', 'save_equip', {name: setNameField.getValue()}, async function (data) {
                        if (data.error) {
                            new UserMessage(data.msg, UserMessage.TYPE_ERROR).show();
                        } else {
                            new UserMessage("New equipment saved!", UserMessage.TYPE_SUCCESS).show();
                            await Multiscript.loadSets(true);
                            Multiscript.selectTab("setManager");
                        }
                    });
                }).addButton('cancel', function () {
            }).show();
        });
        let left = $("<div></div>").append(new west.gui.Groupframe()
            .appendToContentPane($("<span>Maximum sets: <strong>" + (Premium.hasBonus("automation") ? "20" : "3") + "</strong></span><br>"))
            .appendToContentPane($("<span>Used sets: <strong>" + (Multiscript.sets.length).toString() + "</strong></span><br><br>"))
            .appendToContentPane(combobox.getMainDiv())
            .appendToContentPane($("<br><br>"))
            .appendToContentPane(buttonEquipSet.getMainDiv())
            .appendToContentPane($("<br><br>"))
            .appendToContentPane(buttonReplaceSet.getMainDiv())
            .appendToContentPane($("<br><br>"))
            .appendToContentPane(buttonDeleteSet.getMainDiv())
            .appendToContentPane($("<br><br>"))
            .appendToContentPane(buttonAddNew.getMainDiv())
            .getMainDiv());
        let right = $("<div style=\'display:block;position:relative;width:300px;height:410px;'\></div>");
        //head div
        right.append("<div class=\'wear_head wear_slot'\ style=\'display:block;position:absolute;left:30px;top:1px;width:93px;height:94px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position: -95px 0;'\></div>");
        //chest div
        right.append("<div class=\'wear_body wear_slot'\ style=\'display:block;position:absolute;left:30px;top:106px;width:95px;height:138px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:0 0;'\></div>");
        //pants div
        right.append("<div class=\'wear_pants wear_slot'\ style=\'display:block;position:absolute;left:30px;top:258px;width:93px;height:138px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:0 0;'\></div>");
        //neck div
        right.append("<div class=\'wear_neck wear_slot'\ style=\'display:block;position:absolute;left:-47px;top:1px;width:74px;height:74px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-189px 0;'\></div>");
        //right arm div
        right.append("<div class=\'wear_right_arm wear_slot'\ style=\'display:block;position:absolute;left:-64px;top:79px;width:95px;height:138px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:0 0;'\></div>");
        //animal div
        right.append("<div class=\'wear_animal wear_slot'\ style=\'display:block;position:absolute;left:-64px;top:223px;width:93px;height:94px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-95px 0;'\></div>");
        //yield div
        right.append("<div class=\'wear_yield wear_slot'\ style=\'display:block;position:absolute;left:-47px;top:321px;width:74px;height:74px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-189px 0;'\></div>");
        //left arm div
        right.append("<div class=\'wear_left_arm wear_slot'\ style=\'display:block;position:absolute;left:127px;top:52px;width:95px;height:138px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:0 0;'\></div>");
        //belt div
        right.append("<div class=\'wear_belt wear_slot'\ style=\'display:block;position:absolute;left:127px;top:200px;width:93px;height:94px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-95px 0;'\></div>");
        //boots div
        right.append("<div class=\'wear_foot wear_slot'\ style=\'display:block;position:absolute;left:127px;top:302px;width:93px;height:94px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-95px 0;'\></div>");
        let keys = ["head", "body", "pants", "neck", "right_arm", "animal", "yield", "left_arm", "belt", "foot"];
        if (Multiscript.selectedSet != -1)
            Multiscript.insertSetImages(right, keys);
        $("#multiscript_sets_left", htmlSkel).append(left);
        $("#multiscript_sets_right", htmlSkel).append(right);
        return htmlSkel;
    };

    Multiscript.getImageSkel = function () {
        return $("<img src=\''\>");
    };
    Multiscript.insertSetImages = function (html, keys) {
        for (let i = 0; i < keys.length; i++) {
            if (Multiscript.sets[Multiscript.selectedSet][keys[i]] != null) {
                $(".wear_" + keys[i], html).append(Multiscript.getImageSkel().attr("src", Multiscript.getItemImage(Multiscript.sets[Multiscript.selectedSet][keys[i]])));
            }
        }
        return html;
    };

    Multiscript.getItemImage = function (id) {
        return ItemManager.get(id).wear_image;
    };

    Multiscript.addSetsToCombobox = function (combobox) {
        for (let i = 0; i < Multiscript.sets.length; i++) {
            combobox.addItem(i.toString(), Multiscript.sets[i].name);
        }
    };
    // Set manager end

    // Multiscript quick features
    Multiscript.createMultiscriptQuickFeaturesScreen = function () {
        let stopAutoUse = false;
        let sendCurrency = new west.gui.Button("Send event currency", () => {
            Multiscript.createSendEventCurrencyToAll(Object.keys(Game.sesData)[0].toString());
        });
        let logOutQuickly = new west.gui.Button("Log out now", () => {
            Multiscript.quickLogOutButton(true);
        });
        let swapIndicatorButton = new west.gui.Button("Swap indicator", () => {
            Multiscript.showIfSwapGreen();
        });
        let jobProtectionButton = new west.gui.Button("Enable job protection", () => {
            Multiscript.jobProtection();
        });
        let autoUseBuffButton = new west.gui.Button("Auto use buffs", async () => {
            let buffs;
            let count = 0;
            buffs = (buffId.getValue()).replace(/\s/g, "").trim().split(",");
            for (let i = 0; i < buffs.length; i++) {
                count += Bag.getItemCount(buffs[i]);
            }
            /// id: from 2205000 to 2222000 are labor points buffs from circus
            progressbar.setValue(0);
            new UserMessage("IMPORTANT: Refresh the page to stop the script!", UserMessage.TYPE_HINT).show();
            if (buffs.length == 1) {
                count = parseInt(buffCount.getValue()) >= Bag.getItemCount(parseInt(buffs[0])) ? Bag.getItemCount(parseInt(buffs[0])) : parseInt(buffCount.getValue());
            }
            console.log(count);
            let howManyUsed = 0;
            progressbar.setMaxValue(count);
            for (let i = 0; i < buffs.length; i++) {
                if (Multiscript.isValidNumber(timeOut.getValue())) {
                    try {
                        if (Bag.getItemCount(buffs[i]) != 0) {
                            let cnt = Bag.getItemCount(buffs[i]);
                            for (let j = 0; j < cnt; j++) {
                                await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(500, 1000)));
                                //console.log("Multiscript: using item "+parseInt(buffs[i])+" for the x"+(j+1)+" time.")
                                ItemUse.doIt(parseInt(buffs[i]));
                                progressbar.increase(1);
                                howManyUsed++;
                                await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(500, parseInt(timeOut.getValue()))));
                                //$(".tw2gui_dialog_framefix").remove();
                                $(".tw2gui_dialog .tw2gui_dialog_actions .tw2gui_button").click();
                                if (howManyUsed == count) {
                                    new UserMessage(howManyUsed + "/" + count + " buffs successfully auto used!", UserMessage.TYPE_SUCCESS).show();
                                    break;
                                }
                            }
                        }

                        //ItemUse.doIt(parseInt(buffId.getValue()));
                    } catch (e) {
                        new UserMessage("Error: " + e, UserMessage.TYPE_ERROR).show();
                        break;
                    }
                    if (i + 1 == buffs.length) {
                        new UserMessage(howManyUsed + "/" + count + " buffs successfully auto used!", UserMessage.TYPE_SUCCESS).show();
                        break;
                    }
                } else {
                    new UserMessage("Use miliseconds for delay! (Eg. 1500)", UserMessage.TYPE_HINT).show();
                    break;
                }
            }
        });

        let fillChurch900 = Multiscript.createFillChurchQueueButton(900, "15 minutes", true);
        let fillChurch1800 = Multiscript.createFillChurchQueueButton(1800, "30 minutes", true);
        let fillChurch3600 = Multiscript.createFillChurchQueueButton(3600, "1 hour", true);

        let buildChurch900 = Multiscript.createFillChurchQueueButton(900, "15 minutes", false);
        let buildChurch1800 = Multiscript.createFillChurchQueueButton(1800, "30 minutes", false);
        let buildChurch3600 = Multiscript.createFillChurchQueueButton(3600, "1 hour", false);

        let htmlSkel = $('<div id="multiscript" style="padding:15px;"></div>');

        htmlSkel.append("<p style='margin-bottom: 5px;'><h4>Fill work queue with church building:</h4></p>");
        htmlSkel.append(fillChurch900);
        htmlSkel.append(fillChurch1800);
        htmlSkel.append(fillChurch3600);
        htmlSkel.append("<br><br><p style='margin-bottom: 5px;'><h4>Start only 1 job of church building:</h4></p>");
        htmlSkel.append(buildChurch900);
        htmlSkel.append(buildChurch1800);
        htmlSkel.append(buildChurch3600);
        if (Game.sesData.length > 0) {
            htmlSkel.append("<br><br><p style='margin-bottom: 5px;'><h4>Send event (" + Object.keys(Game.sesData)[0] + ") currency to friends:</h4></p>");
            htmlSkel.append(sendCurrency.getMainDiv());
        }
        htmlSkel.append("<br><br><p style='margin-bottom: 5px;'><h4>Log out quickly - Swap indicator in FF window - Job Protection</h4></p>");
        htmlSkel.append(logOutQuickly.getMainDiv());
        htmlSkel.append(swapIndicatorButton.getMainDiv());
        htmlSkel.append(jobProtectionButton.getMainDiv());

        htmlSkel.append("<br><br><p style='margin-bottom: 5px;'><h4>Auto use buffs (will use all if multiple specified) (refresh to stop):</h4></p>");
        htmlSkel.append(autoUseBuffButton.getMainDiv());
        // textfield num of buffs
        let buffCount = new west.gui.Textfield("buffCount").setPlaceholder(15);
        let buffs = $("<div></div>");
        buffs.append("<span> # of buffs to use (empty if multiple):</span>");
        buffCount.setWidth(50);
        buffs.append(buffCount.getMainDiv());
        // textfield buff id
        let buffId = new west.gui.Textfield("buffid").setPlaceholder("2219000,2220000,2221000...");
        buffs.append("<span> Buff ID (separate by comma if multiple):</span>");
        buffId.setWidth(250);
        buffs.append(buffId.getMainDiv());
        // textfield for timeout
        let timeOut = new west.gui.Textfield("timeout").setPlaceholder("in ms");
        buffs.append("<span> Upper delay limit:</span>");
        timeOut.setWidth(40);
        buffs.append(timeOut.getMainDiv());
        let progressbar = new west.gui.Progressbar(0, 1);
        htmlSkel.append(buffs);
        progressbar.divMain[0].style.bottom = "-10px";
        htmlSkel.append(progressbar.getMainDiv());

        return htmlSkel;
    };

    // Cancel selected jobs in task queue
    Multiscript.cancelSelectedTasks = function () {
        //let savedBefore = Multiscript.whichToCancel;
        //let whichToCancel = Multiscript.whichToCancel.length < 1 ? [] : Multiscript.whichToCancel;
        //checkbox: tw2gui_checkbox undefined tw2gui_checkbox_labeled tw2gui_checkbox_checked


        let queuedTasks = document.getElementsByClassName("centermap");
        let tasks = document.getElementsByClassName("task");
        let remove = document.querySelectorAll(`[id^="cancelSelJob"]`);
        if (remove.length > 0) {
            remove.forEach(function (x) {
                x.remove();
            });
        }
        if (remove.length > 0) {
            remove.forEach(function (x) {
                x.remove();
            });
        }
        let taskCancelBox;
        for (let i = 0; i < queuedTasks.length; i++) {
            taskCancelBox = new west.gui.Checkbox().setSelected(
                Multiscript.whichToCancel.includes(i)
            ).setCallback((state) => {
                if (!state) {
                    if (Multiscript.whichToCancel.includes(i)) {
                        Multiscript.whichToCancel = Multiscript.whichToCancel.filter(function (item) {
                            return item !== i
                        });
                    }
                } else {
                    //console.log(`push to array ${i} ---- state is ${state}`);
                    Multiscript.whichToCancel.push(i);
                }
            }).setId("cancelSelJob" + i);
            document.querySelectorAll(`[class^="icon task-queueId-"]`)[i].insertBefore(document.createElement("div").appendChild(taskCancelBox.getMainDiv()[0]), queuedTasks[i]);
        }
        //console.log(Multiscript.whichToCancel);
    };

    Multiscript.createCancelTasksButton = {
        async cancelSelectedTasks() {
            let tasksToCancel = Multiscript.whichToCancel;
            if (tasksToCancel.length < 1) {
                new UserMessage("No tasks selected!", UserMessage.TYPE_ERROR).show();
            } else {
                for (let i = 0; i <= tasksToCancel.length; i++) {
                    if (i == tasksToCancel.length) {
                        new UserMessage(tasksToCancel.length + " tasks cancelled!", UserMessage.TYPE_SUCCESS).show();
                        break;
                    }
                    await new Promise(r => setTimeout(r, 235));
                    TaskQueue.cancel(tasksToCancel[i]);
                }
                Multiscript.whichToCancel = [];
            }
        },
        init() {
            const cancelAll = document.getElementById('cancelAllInQueue');
            const cancelAllClone = cancelAll.cloneNode(true);
            cancelAllClone.style.right = "9px";
            cancelAllClone.setAttribute("onClick", "javascript: Multiscript.createCancelTasksButton.cancelSelectedTasks();");
            document.getElementById("ui_workcontainer").appendChild(cancelAllClone);
        }
    };

    // Health regen combobox for hotel and barrack
    Multiscript.comboboxHealthRegen = function () {
        let combobox = new west.gui.Combobox();
        combobox.addItem(-1, "Select accomodation");

        combobox.addItem("Hotel_Level 1_0.001333333", "Hotel Level 1");
        combobox.addItem("Hotel_Level 2_0.0015", "Hotel Level 2");
        combobox.addItem("Hotel_Level 3_0.00166667", "Hotel Level 3");
        combobox.addItem("Hotel_Level 4_0.00183333", "Hotel Level 4");
        combobox.addItem("Hotel_Level 5_0.002", "Hotel Level 5");

        combobox.addItem("Barracks_Level 1_0.0018417", "Barracks Level 1");
        combobox.addItem("Barracks_Level 2_0.00235", "Barracks Level 2");
        combobox.addItem("Barracks_Level 3_0.0025", "Barracks Level 3");
        combobox.addItem("Barracks_Level 4_0.0026333", "Barracks Level 4");
        combobox.addItem("Barracks_Level 5_0.0027667", "Barracks Level 5");
        combobox.addItem("Barracks_Level 6_0.0027667", "Barracks Level 6");

        combobox.setWidth(160);
        combobox.addListener(function (value) {
            //console.log(value);
            Multiscript.hpRegenCalc.selectedAccomodation = value;
        });
        return combobox;
    };

    // Health regen time calculator
    Multiscript.createHealthRegenScreen = function () {
        let html = $("<div id=\'health_calc'\ style = \'padding:15px;'\></div>");

        let htmlMaxHp = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlMaxHp.append("<span> Maximum health points: </span>");
        let htmlMaxHpTextfield = new west.gui.Textfield("maxHp");
        htmlMaxHpTextfield.setWidth(100);
        htmlMaxHpTextfield.setValue(Multiscript.hpRegenCalc.maximumHp != "" ? Multiscript.hpRegenCalc.maximumHp : (Character.maxHealth).toString());
        htmlMaxHp.append(htmlMaxHpTextfield.getMainDiv());

        let htmlCurrentHp = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlCurrentHp.append("<span> Current health points: </span>");
        let htmlCurrentHpTextfield = new west.gui.Textfield("currentHp");
        htmlCurrentHpTextfield.setWidth(100);
        htmlCurrentHpTextfield.setValue(Multiscript.hpRegenCalc.currentHp != "" ? Multiscript.hpRegenCalc.currentHp : (Character.health).toString());
        htmlCurrentHp.append(htmlCurrentHpTextfield.getMainDiv());

        let htmlTargetHp = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlTargetHp.append("<span> Target health points: </span>");
        let htmlTargetHpTextfield = new west.gui.Textfield("targetHp");
        htmlTargetHpTextfield.setWidth(100);
        htmlTargetHpTextfield.setValue(Multiscript.hpRegenCalc.targetHp != "" ? Multiscript.hpRegenCalc.targetHp : (Character.maxHealth).toString());
        htmlTargetHp.append(htmlTargetHpTextfield.getMainDiv());

        let htmlRegenBonus = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlRegenBonus.append("<span> Regen bonus from gear and buffs: </span>");
        let htmlRegenBonusTextfield = new west.gui.Textfield("regenHp");
        htmlRegenBonusTextfield.setValue(Multiscript.hpRegenCalc.regenBonus);
        htmlRegenBonusTextfield.setWidth(100);
        htmlRegenBonus.append(htmlRegenBonusTextfield.getMainDiv());

        let sleepAccomodationBox = $("<div></div>");
        sleepAccomodationBox.append("<span> Sleeping accomodation: </span>");
        Multiscript.comboboxHealthRegen().select(Multiscript.hpRegenCalc.selectedAccomodation == -1 ? -1 : Multiscript.hpRegenCalc.selectedAccomodation);
        sleepAccomodationBox.append(Multiscript.comboboxHealthRegen().getMainDiv());

        let calculateHealthRegen = new west.gui.Button("Calculate", function () {

            if (Multiscript.isValidNumber(htmlMaxHpTextfield.getValue())) {
                Multiscript.hpRegenCalc.maximumHp = parseInt(htmlMaxHpTextfield.getValue());
                htmlMaxHpTextfield.setValue(Multiscript.hpRegenCalc.maximumHp != "" ? Multiscript.hpRegenCalc.maximumHp : (Character.maxHealth).toString());
            } else {
                Multiscript.hpRegenCalc.maximumHp = 0;
                new UserMessage("Please input a valid integer.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlCurrentHpTextfield.getValue())) {
                Multiscript.hpRegenCalc.currentHp = parseInt(htmlCurrentHpTextfield.getValue());
                htmlCurrentHpTextfield.setValue(Multiscript.hpRegenCalc.currentHp != "" ? Multiscript.hpRegenCalc.currentHp : (Character.health).toString());
            } else {
                Multiscript.hpRegenCalc.currentHp = 0;
                new UserMessage("Please input a valid integer.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlTargetHpTextfield.getValue())) {
                Multiscript.hpRegenCalc.targetHp = parseInt(htmlTargetHpTextfield.getValue());
                htmlTargetHpTextfield.setValue(Multiscript.hpRegenCalc.targetHp != "" ? Multiscript.hpRegenCalc.targetHp : (Character.maxHealth).toString());
            } else {
                Multiscript.hpRegenCalc.targetHp = 0;
                new UserMessage("Please input a valid integer.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlRegenBonusTextfield.getValue())) {
                Multiscript.hpRegenCalc.regenBonus = parseInt(htmlRegenBonusTextfield.getValue());
            } else {
                Multiscript.hpRegenCalc.regenBonus = 0;
                new UserMessage("Please input a valid integer.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.hpRegenCalc.selectedAccomodation == -1) {
                new UserMessage("Please select your sleeping place.", UserMessage.TYPE_ERROR).show();
            } else {
                Multiscript.comboboxHealthRegen().select(Multiscript.hpRegenCalc.selectedAccomodation);
            }

            Multiscript.selectTab("hpRegen");
        });

        let resultRegenSeconds = 150;
        let sleepingAcc = Multiscript.hpRegenCalc.selectedAccomodation;
        let maxHp = Multiscript.hpRegenCalc.maximumHp;
        let currHp = Multiscript.hpRegenCalc.currentHp;
        let tarHp = Multiscript.hpRegenCalc.targetHp;
        let regenB = Multiscript.hpRegenCalc.regenBonus == 1 ? 1 : ((Multiscript.hpRegenCalc.regenBonus) / 100) + 1;
        let sleepAccSplit = sleepingAcc.toString().split("_");
        resultRegenSeconds = (tarHp - currHp) / (maxHp * sleepAccSplit[2] * regenB);
        resultRegenSeconds = resultRegenSeconds * 60;

        //console.log(resultRegenSeconds);

        let date = new Date(0);
        date.setSeconds(!isNaN(resultRegenSeconds) ? resultRegenSeconds : 36000000); // specify value for SECONDS here
        let regenReadable = date.toISOString().substring(11, 19);

        html.append("<h3 style='text-align: center'> Calculate health regen time</h3>");
        html.append("<br><hr><br>");
        html.append(htmlMaxHp);
        html.append(htmlCurrentHp);
        html.append(htmlTargetHp);
        html.append(htmlRegenBonus);
        html.append(sleepAccomodationBox);
        html.append("<br>");
        html.append(calculateHealthRegen.getMainDiv());
        html.append("<br><hr><br>");
        //console.log(resultRegenSeconds > 1 ? resultRegenSeconds : 'Waiting for user input..');
        sleepAccSplit[1] != undefined ? html.append("<div style='text-align: center'><strong> Full HP in " + sleepAccSplit[0] + " " + sleepAccSplit[1] + ": </strong><h3>" + regenReadable + "</h3></div>")
            : html.append("<div style='text-align: center'><strong> Full HP in: </strong><h3> ? hours</h3></div>");
        return html;
    };

    // Product drop calculator
    Multiscript.createXpScreen = function () {
        let html = $("<div id=\'xp_calc'\ style = \'padding:15px;'\></div>");
        let isJobSilver = new west.gui.Checkbox();
        isJobSilver.setLabel("Is this job silver?");
        isJobSilver.setSelected(Multiscript.xpCalc.isSilver);
        isJobSilver.setCallback(function () {
            Multiscript.xpCalc.isSilver = !Multiscript.xpCalc.isSilver;
        });
        let isJobGold = new west.gui.Checkbox();
        isJobGold.setLabel("Is this job gold?");
        isJobGold.setSelected(Multiscript.xpCalc.isGold);
        isJobGold.setCallback(function () {
            Multiscript.xpCalc.isGold = !Multiscript.xpCalc.isGold;
        });
        let htmlBaseXp = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlBaseXp.append("<span> Base experience of this job: </span>");
        let htmlBaseXpTextfield = new west.gui.Textfield("baseXp");
        htmlBaseXpTextfield.setValue(Multiscript.xpCalc.baseXp);
        htmlBaseXpTextfield.setWidth(100);
        htmlBaseXp.append(htmlBaseXpTextfield.getMainDiv());

        let htmlGearBonus = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlGearBonus.append("<span> Your gear and buff bonuses added together: </span>");
        let htmlGearBonusTextfield = new west.gui.Textfield("gearBonus");
        htmlGearBonusTextfield.setValue(Multiscript.xpCalc.gearAndBuffBonus);
        htmlGearBonusTextfield.setWidth(100);
        htmlGearBonus.append(htmlGearBonusTextfield.getMainDiv());

        let htmlWorldBonus = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlWorldBonus.append("<span> Special world bonus (in %, without the % sign): </span>");
        let htmlWorldBonusTextfield = new west.gui.Textfield("worldBonus");
        htmlWorldBonusTextfield.setValue(Multiscript.xpCalc.worldBonus);
        htmlWorldBonusTextfield.setWidth(100);
        htmlWorldBonus.append(htmlWorldBonusTextfield.getMainDiv());

        let calcualteXpButton = new west.gui.Button("Calculate", function () {
            Multiscript.xpCalc.isSilver = isJobSilver.isSelected();
            Multiscript.xpCalc.isGold = isJobGold.isSelected();

            if (Multiscript.isValidNumber(htmlBaseXpTextfield.getValue())) {
                Multiscript.xpCalc.baseXp = parseInt(htmlBaseXpTextfield.getValue());
            } else {
                Multiscript.xpCalc.baseXp = 0;
                new UserMessage("Please input a valid integer.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlGearBonusTextfield.getValue())) {
                Multiscript.xpCalc.gearAndBuffBonus = parseInt(htmlGearBonusTextfield.getValue());
            } else {
                Multiscript.xpCalc.gearAndBuffBonus = 0;
                new UserMessage("Please input a valid integer.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlWorldBonusTextfield.getValue())) {
                Multiscript.xpCalc.worldBonus = parseInt(htmlWorldBonusTextfield.getValue());
            } else {
                Multiscript.xpCalc.worldBonus = 0;
                new UserMessage("Please input a valid integer.", UserMessage.TYPE_ERROR).show();
            }
            Multiscript.selectTab("xpCalc");
        });
        let basexp = Multiscript.xpCalc.baseXp;
        let bonusBuff = Multiscript.xpCalc.gearAndBuffBonus == 1 ? 1 : ((Multiscript.xpCalc.gearAndBuffBonus) / 100) + 1;
        let worldBonus = ((Multiscript.xpCalc.worldBonus) / 100) + 1;
        let isSilver = Multiscript.xpCalc.isSilver;
        let isGold = Multiscript.xpCalc.isGold;
        let calculatedXp = 0;

        if (isSilver && isGold) {
            new UserMessage("Select only silver or gold job.", UserMessage.TYPE_ERROR).show();
        } else {
            calculatedXp = basexp * bonusBuff;

            if (isSilver) {
                calculatedXp = calculatedXp * 1.5;
            }

            if (isGold) {
                calculatedXp = calculatedXp * 2;
            }

            if (worldBonus > 1) {
                calculatedXp = calculatedXp * worldBonus;
            } else {
                calculatedXp = calculatedXp;
            }
        }

        html.append("<h3 style='text-align: center'> Calculate XP of a job</h3>");
        html.append(isJobSilver.getMainDiv());
        html.append("<br>");
        html.append(isJobGold.getMainDiv());
        html.append("<br><hr><br>");
        html.append(htmlBaseXp);
        html.append("<br>");
        html.append(htmlGearBonus);
        html.append("<br>");
        html.append(htmlWorldBonus);
        html.append("<br>");
        html.append(calcualteXpButton.getMainDiv());
        html.append("<br><hr><br>");
        //(calculatedXp);
        html.append("<div style='text-align: center'><strong> Calculated job experience: </strong><h3>" + Math.floor(calculatedXp) + "</h3></div>");
        return html;
    };

    // Product drop calculator
    Multiscript.createMoneyScreen = function () {
        let html = $("<div id=\'money_calc'\ style = \'padding:15px;'\></div>");
        let isJobSilver = new west.gui.Checkbox();
        isJobSilver.setLabel("Is this job silver?");
        isJobSilver.setSelected(Multiscript.moneyCalc.isSilver);
        isJobSilver.setCallback(function () {
            Multiscript.moneyCalc.isSilver = !Multiscript.xpCalc.isSilver;
        });
        let isJobGold = new west.gui.Checkbox();
        isJobGold.setLabel("Is this job gold?");
        isJobGold.setSelected(Multiscript.moneyCalc.isGold);
        isJobGold.setCallback(function () {
            Multiscript.moneyCalc.isGold = !Multiscript.moneyCalc.isGold;
        });

        let isPremium = new west.gui.Checkbox();
        isPremium.setLabel("Higher income premium?");
        isPremium.setSelected(Multiscript.moneyCalc.higherIncome);
        isPremium.setCallback(function () {
            Multiscript.moneyCalc.higherIncome = !Multiscript.moneyCalc.higherIncome;
        });

        let htmlBaseMoney = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlBaseMoney.append("<span> Base money of this job: </span>");
        let htmlBaseMoneyTextfield = new west.gui.Textfield("baseMoney");
        htmlBaseMoneyTextfield.setValue(Multiscript.moneyCalc.baseMoney);
        htmlBaseMoneyTextfield.setWidth(100);
        htmlBaseMoney.append(htmlBaseMoneyTextfield.getMainDiv());

        let htmlGearBonus = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlGearBonus.append("<span> Your gear and buff bonuses added together: </span>");
        let htmlGearBonusTextfield = new west.gui.Textfield("gearBonus");
        htmlGearBonusTextfield.setValue(Multiscript.moneyCalc.gearAndBuffBonus);
        htmlGearBonusTextfield.setWidth(100);
        htmlGearBonus.append(htmlGearBonusTextfield.getMainDiv());

        let htmlWorldBonus = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlWorldBonus.append("<span> Special world bonus (in %, without the % sign): </span>");
        let htmlWorldBonusTextfield = new west.gui.Textfield("worldBonus");
        htmlWorldBonusTextfield.setValue(Multiscript.moneyCalc.worldBonus);
        htmlWorldBonusTextfield.setWidth(100);
        htmlWorldBonus.append(htmlWorldBonusTextfield.getMainDiv());

        let calculateMoneyButton = new west.gui.Button("Calculate", function () {
            Multiscript.moneyCalc.isSilver = isJobSilver.isSelected();
            Multiscript.moneyCalc.isGold = isJobGold.isSelected();
            Multiscript.moneyCalc.higherIncome = isPremium.isSelected();

            if (Multiscript.isValidNumber(htmlBaseMoneyTextfield.getValue())) {
                Multiscript.moneyCalc.baseMoney = parseInt(htmlBaseMoneyTextfield.getValue());
            } else {
                Multiscript.moneyCalc.baseMoney = 0;
                new UserMessage("Please input a valid number.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlGearBonusTextfield.getValue())) {
                Multiscript.moneyCalc.gearAndBuffBonus = parseInt(htmlGearBonusTextfield.getValue());
            } else {
                Multiscript.moneyCalc.gearAndBuffBonus = 0;
                new UserMessage("Please input a valid number.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlWorldBonusTextfield.getValue())) {
                Multiscript.moneyCalc.worldBonus = parseInt(htmlWorldBonusTextfield.getValue());
            } else {
                Multiscript.moneyCalc.worldBonus = 0;
                new UserMessage("Please input a valid number.", UserMessage.TYPE_ERROR).show();
            }
            Multiscript.selectTab("moneyCalc");
        });
        let basemoney = Multiscript.moneyCalc.baseMoney;
        let bonusBuff = Multiscript.moneyCalc.gearAndBuffBonus == 1 ? 1 : ((Multiscript.moneyCalc.gearAndBuffBonus) / 100) + 1;
        let worldBonus = ((Multiscript.moneyCalc.worldBonus) / 100) + 1;
        let isSilver = Multiscript.moneyCalc.isSilver;
        let isGold = Multiscript.moneyCalc.isGold;
        let isPremiumActive = Multiscript.moneyCalc.higherIncome;
        let calculatedMoney = 0;

        if (isSilver && isGold) {
            new UserMessage("Select only silver or gold job.", UserMessage.TYPE_ERROR).show();
        } else {
            calculatedMoney = basemoney * bonusBuff;

            if (isPremiumActive) {
                calculatedMoney = calculatedMoney * 1.5;
            }

            if (isSilver) {
                calculatedMoney = calculatedMoney * 1.5;
            }

            if (isGold) {
                calculatedMoney = calculatedMoney * 2;
            }

            if (worldBonus > 1) {
                calculatedMoney = calculatedMoney * worldBonus;
            } else {
                calculatedMoney = calculatedMoney;
            }

        }


        html.append("<h3 style='text-align: center'> Calculate money of a job</h3>");
        html.append(isJobSilver.getMainDiv());
        html.append("<br>");
        html.append(isJobGold.getMainDiv());
        html.append("<br>");
        html.append(isPremium.getMainDiv());
        html.append("<br><hr><br>");
        html.append(htmlBaseMoney);
        html.append("<br>");
        html.append(htmlGearBonus);
        html.append("<br>");
        html.append(htmlWorldBonus);
        html.append("<br>");
        html.append(calculateMoneyButton.getMainDiv());
        html.append("<br><hr><br>");
        //console.log(calculatedMoney);
        html.append("<div style='text-align: center'><strong> Calculated job money: </strong><h3>$" + Math.floor(calculatedMoney) + "</h3></div>");
        return html;
    };

    // Product drop calculator
    Multiscript.createProductDropScreen = function () {
        let html = $("<div id=\'product_drop'\ style = \'padding:15px;'\></div>");
        let isJobSilver = new west.gui.Checkbox();
        isJobSilver.setLabel("Is this job silver?");
        isJobSilver.setSelected(Multiscript.dropChance.isSilver);
        isJobSilver.setCallback(function () {
            Multiscript.dropChance.isSilver = !Multiscript.dropChance.isSilver;
        });
        let isJobGold = new west.gui.Checkbox();
        isJobGold.setLabel("Is this job gold?");
        isJobGold.setSelected(Multiscript.dropChance.isGold);
        isJobGold.setCallback(function () {
            Multiscript.dropChance.isGold = !Multiscript.dropChance.isGold;
        });

        let isPremium = new west.gui.Checkbox();
        isPremium.setLabel("Higher income premium?");
        isPremium.setSelected(Multiscript.dropChance.higherIncome);
        isPremium.setCallback(function () {
            Multiscript.dropChance.higherIncome = !Multiscript.dropChance.higherIncome;
        });

        let isAdvent = new west.gui.Checkbox();
        isAdvent.setLabel("Are you an adventurer class?");
        isAdvent.setSelected(Multiscript.dropChance.isAdventurer);
        isAdvent.setCallback(function () {
            Multiscript.dropChance.isAdventurer = !Multiscript.dropChance.isAdventurer;
        });

        let isGoldenPickaxe = new west.gui.Checkbox();
        isGoldenPickaxe.setLabel("5 golden pickaxes?");
        isGoldenPickaxe.setSelected(Multiscript.dropChance.fullPickaxe);
        isGoldenPickaxe.setCallback(function () {
            Multiscript.dropChance.fullPickaxe = !Multiscript.dropChance.fullPickaxe;
        });

        //here
        let htmlBaseDrop = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlBaseDrop.append("<span> Base product drop of this job: </span>");
        let htmlBaseDropTextfield = new west.gui.Textfield("baseDrop");
        htmlBaseDropTextfield.setValue(Multiscript.dropChance.baseDrop);
        htmlBaseDropTextfield.setWidth(100);
        htmlBaseDrop.append(htmlBaseDropTextfield.getMainDiv());

        let htmlGearBonus = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlGearBonus.append("<span> Your gear and buff bonuses added together: </span>");
        let htmlGearBonusTextfield = new west.gui.Textfield("gearBonus");
        htmlGearBonusTextfield.setValue(Multiscript.dropChance.gearAndBuffBonus);
        htmlGearBonusTextfield.setWidth(100);
        htmlGearBonus.append(htmlGearBonusTextfield.getMainDiv());

        let htmlWorldBonus = $("<div style=\'display: flex; justify-content: space-between;'\></div>");
        htmlWorldBonus.append("<span> Special world bonus (in %, without the % sign): </span>");
        let htmlWorldBonusTextfield = new west.gui.Textfield("worldBonus");
        htmlWorldBonusTextfield.setValue(Multiscript.dropChance.worldBonus);
        htmlWorldBonusTextfield.setWidth(100);
        htmlWorldBonus.append(htmlWorldBonusTextfield.getMainDiv());

        let calculateMoneyButton = new west.gui.Button("Calculate", function () {
            Multiscript.dropChance.isSilver = isJobSilver.isSelected();
            Multiscript.dropChance.isGold = isJobGold.isSelected();
            Multiscript.dropChance.isAdventurer = isAdvent.isSelected();
            Multiscript.dropChance.fullPickaxe = isGoldenPickaxe.isSelected();
            Multiscript.dropChance.higherIncome = isPremium.isSelected();

            if (Multiscript.isValidNumber(htmlBaseDropTextfield.getValue())) {
                Multiscript.dropChance.baseDrop = parseInt(htmlBaseDropTextfield.getValue());
            } else {
                Multiscript.dropChance.baseDrop = 0;
                new UserMessage("Please input a valid number.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlGearBonusTextfield.getValue())) {
                Multiscript.dropChance.gearAndBuffBonus = parseInt(htmlGearBonusTextfield.getValue());
            } else {
                Multiscript.dropChance.gearAndBuffBonus = 0;
                new UserMessage("Please input a valid number.", UserMessage.TYPE_ERROR).show();
            }

            if (Multiscript.isValidNumber(htmlWorldBonusTextfield.getValue())) {
                Multiscript.dropChance.worldBonus = parseInt(htmlWorldBonusTextfield.getValue());
            } else {
                Multiscript.dropChance.worldBonus = 0;
                new UserMessage("Please input a valid number.", UserMessage.TYPE_ERROR).show();
            }
            Multiscript.selectTab("productDrop");
        });

        let basedrop = Multiscript.dropChance.baseDrop;
        let bonusBuff = Multiscript.dropChance.gearAndBuffBonus == 1 ? 1 : ((Multiscript.dropChance.gearAndBuffBonus) / 100) + 1;
        let worldBonus = Multiscript.dropChance.worldBonus == 1 ? 1 : ((Multiscript.dropChance.worldBonus) / 100) + 1;
        let isSilver = Multiscript.dropChance.isSilver;
        let isGold = Multiscript.dropChance.isGold;
        let isPremiumActive = Multiscript.dropChance.higherIncome;
        let isAdventClass = Multiscript.dropChance.isAdventurer;
        let is5Golden = Multiscript.dropChance.fullPickaxe;
        let calculatedDrop = Multiscript.dropChance.baseDrop;

        if (isSilver && isGold) {
            new UserMessage("Select only silver or gold job.", UserMessage.TYPE_ERROR).show();
        } else {

            if (is5Golden) {
                calculatedDrop = calculatedDrop * 1.5;
            }

            calculatedDrop = calculatedDrop * bonusBuff;

            if (worldBonus > 1) {
                calculatedDrop = calculatedDrop * worldBonus;
            } else {
                calculatedDrop = calculatedDrop;
            }

            if (isPremiumActive) {
                calculatedDrop = calculatedDrop * 1.5;
            }

            if (isAdventClass) {
                calculatedDrop = calculatedDrop * 1.2;
            }

            if (isSilver && !isGold) {
                if (isSilver && is5Golden) {
                    calculatedDrop = calculatedDrop + (basedrop * 1.5 * 0.5);

                } else if (isSilver && !is5Golden) {
                    calculatedDrop = calculatedDrop + (basedrop * 0.5);
                }
            }
            if (isGold && !isSilver) {
                if (isGold && is5Golden) {
                    calculatedDrop = calculatedDrop + (basedrop * 1.5);

                } else if (isGold && !is5Golden) {
                    calculatedDrop = calculatedDrop + (basedrop);
                }
            }
        }

        html.append("<h3 style='text-align: center'>Calculate product drop from a job</h3>");
        html.append(isJobSilver.getMainDiv());
        html.append("<br>");
        html.append(isJobGold.getMainDiv());
        html.append("<br>");
        html.append(isPremium.getMainDiv());
        html.append("<br>");
        html.append(isAdvent.getMainDiv());
        html.append("<br>");
        html.append(isGoldenPickaxe.getMainDiv());
        html.append("<br><hr><br>");
        html.append(htmlBaseDrop);
        html.append(htmlGearBonus);
        html.append(htmlWorldBonus);
        html.append(calculateMoneyButton.getMainDiv());
        html.append("<br><hr><br>");
        //console.log(calculatedDrop);
        html.append("<div style='text-align: center'><strong> Calculated product drop: </strong><h3>" + Math.floor(calculatedDrop) + "%</h3></div>");
        return html;
    };

    // Send event currency to all friends in one click (NOT doubleclick)
    Multiscript.createSendEventCurrencyToAll = function (eventName) {
        new west.gui.Dialog("Event currency", "Send event currency to all friends? (" + Object.keys(Game.sesData)[0] + " event)").setIcon(west.gui.Dialog.SYS_QUESTION).setModal(true, false, {
            bg: "https://westcz.innogamescdn.com/images/curtain_bg.png",
            opacity: 0.7
        })
            .addButton('yes', function () {
                Ajax.remoteCall('friendsbar', 'event_all', {event: eventName}, response => {
                    if (response.error) {
                        new UserMessage(response.msg, UserMessage.TYPE_ERROR).show();
                    } else {
                        new UserMessage(response.msg, UserMessage.TYPE_SUCCESS).show();
                    }
                });
            }).addButton('no', function () {
        }).show();
    };

    // Create button for Multiscript.createSendEventCurrencyToAll()
    Multiscript.sendCurrencyToAllButton = function () {
        let img = "https://westcz.innogamescdn.com/images/icons/" + Object.keys(Game.sesData)[0].toString() + ".png"
        let sendAllEventCurrency = $('<div class="buffbar buffbar_sendAll"><div id="buff_div_sendAll" class="buff_div " style="cursor: pointer;" onclick=Multiscript.createSendEventCurrencyToAll(Object.keys(Game.sesData)[0].toString());><div class="bag_item_mini"><img class="hasMousePopup" src="' + img + '" alt="undefined" width="43"><div class="bag_item_count" style="width:auto"><p>Send</p></div></div><span class="buffspan" id="sendAll"></span></div></div>');
        $("#buffbars").prepend(sendAllEventCurrency);
    };

    // Button for quick log out
    Multiscript.quickLogOutButton = function (noDialog) {
        let logoutUrl = Game.masterURL + "/index.php?page=logout";
        if (noDialog) {
            window.location.href = logoutUrl;
        } else {
            new west.gui.Dialog("Log out", "Do you want to log out now?").setIcon(west.gui.Dialog.SYS_QUESTION).setModal(true, false, {
                bg: "https://westcz.innogamescdn.com/images/curtain_bg.png",
                opacity: 0.7
            }).addButton('Log out', function () {
                window.location.href = logoutUrl;
            }).addButton('no', function () {
            }).show();
        }
    };

    // Button GUI for Multiscript.quickLogOutButton()
    Multiscript.createLogOutBuffBar = function () {
        let logOutBtn = $('<div class="buffbar buffbar_logoutBtn_bb"><div id="buff_div_logoutBtn_bb" class="buff_div " style="cursor: pointer;" onclick=Multiscript.quickLogOutButton();><div class="bag_item_mini" style="background-image: none"><img class="hasMousePopup" src="https://westen.innogamescdn.com/images/interface/chat/leavechat.png" alt="undefined" width="43"><div class="bag_item_count" style="width:auto"><p>LogOut</p></div></div><span class="buffspan" id="logoutBtn_bb"></span></div></div>');
        $("#buffbars").prepend(logOutBtn);
    };

    // Settings for enhanced job screen,
    // save a travel set here to use when moving between jobs
    Multiscript.createGeneralSettingsScreen = function () {
        let html = $("<div id=\'generalsettings'\ style = \'padding:5px;'\></div>");

        // Job enhancer settings code
        let reloadSets = new west.gui.Button("Reload saved sets", async function () {
            if (window.localStorage.getItem("multiscript_sets")) {
                window.localStorage.removeItem("multiscript_sets");
                await Multiscript.loadSets();
                new UserMessage("Sets reloaded successfully!", UserMessage.TYPE_SUCCESS).show();
            }
            Multiscript.selectTab("generalsettings");
        });

        //job enhancer settings
        let saveTravelSet = new west.gui.Button("Save travel", async function () {
            window.localStorage.setItem("multiscript_travelset", Multiscript.travelSet);
            new UserMessage("Travel set saved!", UserMessage.TYPE_SUCCESS).show();
            Multiscript.selectTab("generalsettings");
        });
        let savePrimarySet = new west.gui.Button("Save primary", async function () {
            window.localStorage.setItem("multiscript_primaryset", Multiscript.primarySet);
            new UserMessage("Primary set saved!", UserMessage.TYPE_SUCCESS).show();
            Multiscript.selectTab("generalsettings");
        });
        let saveSecondarySet = new west.gui.Button("Save secondary", async function () {
            window.localStorage.setItem("multiscript_secondaryset", Multiscript.secondarySet);
            new UserMessage("Secondary set saved!", UserMessage.TYPE_SUCCESS).show();
            Multiscript.selectTab("generalsettings");
        });

        let travelBox = $("<div></div>");
        travelBox.append("<span> Select <strong>travel</strong> set: </span>");
        travelBox.append(Multiscript.comboboxTravelSet().getMainDiv());
        travelBox.append(saveTravelSet.getMainDiv());
        travelBox.append("<br>");

        travelBox.append("<span> Select <strong>primary</strong> set (duel, etc): </span>");
        travelBox.append(Multiscript.comboboxPrimarySet().getMainDiv());
        travelBox.append(savePrimarySet.getMainDiv());
        travelBox.append("<br>");

        travelBox.append("<span> Select <strong>secondary</strong> set (drop, etc): </span>");
        travelBox.append(Multiscript.comboboxSecondarySet().getMainDiv());
        travelBox.append(saveSecondarySet.getMainDiv());
        travelBox.append("<br>");

        travelBox.append(reloadSets.getMainDiv());

        // General settings code
        let showChurchBuildUnderBuffBar = new west.gui.Checkbox();
        showChurchBuildUnderBuffBar.setLabel("Show quick church building buttons under buffs (left of minimap)?");
        showChurchBuildUnderBuffBar.setSelected(Multiscript.settings.showChurchUnderBuffBars);
        showChurchBuildUnderBuffBar.setCallback(function () {
            Multiscript.settings.showChurchUnderBuffBars = !Multiscript.settings.showChurchUnderBuffBars;
        });
        let showEventSendAllButtonNextToBuffBar = new west.gui.Checkbox();
        showEventSendAllButtonNextToBuffBar.setLabel("Show send event currency button next to buffs (left of minimap)?");
        showEventSendAllButtonNextToBuffBar.setSelected(Multiscript.settings.showEventSendAllButtonNextToBuffBar);
        showEventSendAllButtonNextToBuffBar.setCallback(function () {
            Multiscript.settings.showEventSendAllButtonNextToBuffBar = !Multiscript.settings.showEventSendAllButtonNextToBuffBar;
        });
        let showLogOutNextToBuffBar = new west.gui.Checkbox();
        showLogOutNextToBuffBar.setLabel("Show quick log out button next to buffs (left of minimap)?");
        showLogOutNextToBuffBar.setSelected(Multiscript.settings.showLogOutNextToBuffBar);
        showLogOutNextToBuffBar.setCallback(function () {
            Multiscript.settings.showLogOutNextToBuffBar = !Multiscript.settings.showLogOutNextToBuffBar;
        });
        let showMultiscriptButtonLeft = new west.gui.Checkbox();
        showMultiscriptButtonLeft.setLabel("Show Multiscript button above chat rooms?");
        showMultiscriptButtonLeft.setSelected(Multiscript.settings.showMultiscriptButtonLeft);
        showMultiscriptButtonLeft.setCallback(function () {
            Multiscript.settings.showMultiscriptButtonLeft = !Multiscript.settings.showMultiscriptButtonLeft;
        });
        let showMultiscriptButtonRight = new west.gui.Checkbox();
        showMultiscriptButtonRight.setLabel("Show Multiscript button above work queue?");
        showMultiscriptButtonRight.setSelected(Multiscript.settings.showMultiscriptButtonRight);
        showMultiscriptButtonRight.setCallback(function () {
            Multiscript.settings.showMultiscriptButtonRight = !Multiscript.settings.showMultiscriptButtonRight;
        });

        let saveGeneralSettings = new west.gui.Button("Save selected settings", async function () {
            Multiscript.settings.showChurchUnderBuffBars = showChurchBuildUnderBuffBar.isSelected();
            Multiscript.settings.showEventSendAllButtonNextToBuffBar = showEventSendAllButtonNextToBuffBar.isSelected();
            Multiscript.settings.showLogOutNextToBuffBar = showLogOutNextToBuffBar.isSelected();
            Multiscript.settings.showMultiscriptButtonLeft = showMultiscriptButtonLeft.isSelected();
            Multiscript.settings.showMultiscriptButtonRight = showMultiscriptButtonRight.isSelected();
            if (Multiscript.settings.showMultiscriptButtonLeft == true && Multiscript.settings.showMultiscriptButtonRight == true) {
                new UserMessage("Select only left or right placement!", UserMessage.TYPE_ERROR).show();
            } else {
                window.localStorage.setItem("multiscript_settings", JSON.stringify(Multiscript.settings));
                new UserMessage("Selected settings saved successfully!", UserMessage.TYPE_SUCCESS).show();
            }
            Multiscript.selectTab("generalsettings");
        });

        html.append("<h3>General Multiscript settings</h3>");
        html.append(showChurchBuildUnderBuffBar.getMainDiv());
        html.append(showEventSendAllButtonNextToBuffBar.getMainDiv());
        html.append(showLogOutNextToBuffBar.getMainDiv());
        html.append("<br>");
        html.append(showMultiscriptButtonLeft.getMainDiv());
        html.append("<br>");
        html.append(showMultiscriptButtonRight.getMainDiv());
        let saveGeneralBox = $("<div></div>");
        saveGeneralBox.append(saveGeneralSettings.getMainDiv());
        html.append(saveGeneralBox);
        html.append("<h3>Job Enhancer settings</h3>");
        html.append(travelBox);

        return html;
    };

    // GUI for Multiscript.createTownLogEnhancedScreen()
    Multiscript.rerenderTable = async function (allLogs) {
        await new Promise(r => setTimeout(r, 50));
        document.querySelector(".styled-table").innerHTML = "";
        document.querySelector(".styled-table").innerHTML = "<tr><th>Date</th><th>Action</th></tr>";
        if (!allLogs) {
            let count = 0;
            for (let i = 0; i < Multiscript.townLog.logs.length; i++) {
                if (!(Multiscript.townLog.logs[i].data).includes("constructed")) {
                    $(".styled-table").append("<tr><td>" + Multiscript.townLog.logs[i].log_date + "</td><td>" + Multiscript.townLog.logs[i].data + "</td></tr>");
                    count++;
                }
            }
            if (count == 0) {
                $(".styled-table").append("<tr><td>Only construction data</td><td>on this page.</td></tr>");
            }
            document.querySelector("#selPage").value = Multiscript.townLog.currentTownLogPage;
        } else {
            let cleanlogs = [];
            Multiscript.townLog.allLoadedLogs = JSON.parse(LZString.decompress(window.localStorage.getItem("multiscript_allloadedlogs")));
            for (let i = 0; i < Multiscript.townLog.allLoadedLogs.length; i++) {
                for (let j = 0; j < Multiscript.townLog.allLoadedLogs[i].length; j++) {
                    //const filteredLogs = (Multiscript.townLog.allLoadedLogs[i]).filter(log => !log.data.includes('constructed'));
                    if (!(Multiscript.townLog.allLoadedLogs[i][j].data).includes("constructed")) {
                        cleanlogs.push(Multiscript.townLog.allLoadedLogs[i][j]);
                    }
                }
            }
            //console.log(cleanlogs);
            //console.log("cleanlogs ^^^^^^");
            if (cleanlogs.length > 0) {
                const sortedLogs = cleanlogs.sort((a, b) => new Date(b.log_date) - new Date(a.log_date));
                for (let i = 0; i < sortedLogs.length; i++) {
                    $(".styled-table").append("<tr><td>" + sortedLogs[i].log_date + "</td><td>" + sortedLogs[i].data + "</td></tr>");
                }
            } else {
                const timeElapsed = Date.now();
                const today = new Date(timeElapsed);
                $(".styled-table").append('<tr><td>' + today.toUTCString() + '</td><td>Only construction data in ' + Multiscript.townLog.allLoadedLogs.length + ' pages of your town log.</td></tr>');
            }
        }
    };

    // Enhanced town log screen, load all logs of your town, see only non-construction logs
    // Import/export logs of your town and share with others
    // Browse logs page by page, showing only non-construction logs
    Multiscript.createTownLogEnhancedScreen = async function () {
        let html = $('<div id="townlog" style="padding:1px; height:390px;overflow-y: scroll;"></div>');
        let title = $("<div style=\"text-align: center\"><h2>Enhanced Town Log</h2>Here you see everything except construction.</div><br><hr><br>");
        let css = ".styled-table {\n" +
            "    border-collapse: collapse;\n" +
            "    margin: 16px 0;\n" +
            "    font-size: 0.6em;\n" +
            "    font-family: sans-serif;\n" +
            "    min-width: 400px;\n" +
            "    margin-bottom: 5px;\n" +
            "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n" +
            "}\n" +
            ".styled-table thead tr {\n" +
            "    background-color: #f7f7f7;\n" +
            "    color: #ffffff;\n" +
            "    text-align: left;\n" +
            "}\n" +
            ".styled-table th,\n" +
            ".styled-table td {\n" +
            "    padding: 5px 10px;\n" +
            "}\n" +
            ".styled-table tbody tr {\n" +
            "    border-bottom: 1px solid #dddddd;\n" +
            "}\n" +
            "\n" +
            ".styled-table tbody tr:nth-of-type(even) {\n" +
            "    background-color: #f7f7f7;\n" +
            "}\n" +
            "\n" +
            ".styled-table tbody tr:last-of-type {\n" +
            "    border-bottom: 1px solid #009879;\n" +
            "}\n" +
            ".styled-table tbody tr.active-row {\n" +
            "    font-weight: bold;\n" +
            "    color: #009879;\n" +
            "}\n";
        $('<style>').text(css).appendTo(document.head);

        let nav = $("<div style='float: left; margin-left: 50px;'>" +
            "<span class='pageprompt' style='display: inline;'>" +
            "<div class='background'></div>" +
            "<div class='frame tw2gui_bg_tl'></div>" +
            "<div class='frame tw2gui_bg_tr'></div>" +
            "<div class='frame tw2gui_bg_bl'></div>" +
            "<div class='frame tw2gui_bg_br'></div>" +
            "<span class='tw2gui_textfield_wrapper'>" +
            "<span class='tw2gui_textfield_label'></span>" +
            "<span class='tw2gui_textfield'><span><input type='text' id='selPage' size='3'></span>" +
            "</span></span><span class='maxpages'>/ " + Multiscript.townLog.lastTownLogPage + "</span></span></div>");

        let table = $(" <table class='styled-table' style='width: 100%; margin: auto;'>\n" +
            "<thead>" +
            "  <tr>\n" +
            "    <th>Date</th>\n" +
            "    <th>Action</th>\n" +
            "  </tr>\n" +
            "</thead>" +
            "</table> ");

        let jumpPage = new west.gui.Button("GO", async function () {
            let selectedPage = parseInt($("#selPage").val());
            if (selectedPage > 0 <= Multiscript.townLog.lastTownLogPage) {
                await Multiscript.getTownLog(Character.homeTown.town_id, selectedPage);
                await Multiscript.rerenderTable();
            }
        });

        let firstPage = new west.gui.Button("<<", async function () {
            await Multiscript.getTownLog(Character.homeTown.town_id, 1);
            await Multiscript.rerenderTable();
        });
        let lastPage = new west.gui.Button(">>", async function () {
            await Multiscript.getTownLog(Character.homeTown.town_id, Multiscript.townLog.lastTownLogPage);
            await Multiscript.rerenderTable();
        });
        let prevPage = new west.gui.Button("<", async function () {
            if (Multiscript.townLog.currentTownLogPage != 1) {
                if (Multiscript.townLog.currentTownLogPage - 1 != 0) {
                    await Multiscript.getTownLog(Character.homeTown.town_id, Multiscript.townLog.currentTownLogPage - 1);
                    await Multiscript.rerenderTable();
                }
            }
        });
        let nextPage = new west.gui.Button(">", async function () {
            if (Multiscript.townLog.currentTownLogPage != Multiscript.townLog.lastTownLogPage) {
                if (Multiscript.townLog.currentTownLogPage + 1 != 0) {
                    await Multiscript.getTownLog(Character.homeTown.town_id, Multiscript.townLog.currentTownLogPage + 1);
                    await Multiscript.rerenderTable();
                }
            }
        });
        let exportButton = new west.gui.Button("Export", async function () {
            const filename = 'exported_townlog_' + Character.name + '.townlog';
            const fileToExport = LZString.decompress(window.localStorage.getItem("multiscript_allloadedlogs"));
            if (fileToExport == null) {
                new UserMessage('You have nothing to export!', UserMessage.TYPE_ERROR).show();
            } else {
                let element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileToExport));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                new UserMessage('Town logs exported!', UserMessage.TYPE_SUCCESS).show();
            }
        });
        let importButton = new west.gui.Button("Import", async function () {
            let input = document.createElement('input');
            input.type = 'file';
            input.onchange = e => {

                // getting a hold of the file reference
                let file = e.target.files[0];

                // setting up the reader
                let reader = new FileReader();
                reader.readAsText(file, 'UTF-8');

                // here we tell the reader what to do when it's done reading...
                reader.onload = async readerEvent => {
                    let content = (readerEvent.target.result).toString();// this is the content!
                    //console.log(content);
                    if (content != null) {
                        window.localStorage.setItem("multiscript_allloadedlogs", LZString.compress(content));
                        await Multiscript.rerenderTable(true);
                        new UserMessage('Logs imported!', UserMessage.TYPE_SUCCESS).show();
                    } else {
                        new UserMessage('Empty logs!', UserMessage.TYPE_ERROR).show();
                    }
                }

            }
            input.click();
        });

        let deleteButton = new west.gui.Button("Delete", async function () {
            let dialog = new west.gui.Dialog("Delete logs",
                west.gui.Dialog.SYS_QUESTION);
            dialog.setText("<p>Delete saved logs?</p>");
            dialog.addButton("yes", function () {
                if (window.localStorage.getItem("multiscript_allloadedlogs")) {
                    window.localStorage.removeItem("multiscript_allloadedlogs");
                    new UserMessage('Logs deleted!', UserMessage.TYPE_SUCCESS).show();
                } else {
                    new UserMessage('There is nothing to delete!', UserMessage.TYPE_ERROR).show();
                }
            });
            dialog.addButton("cancel", function () {

            });
            dialog.show();
        });

        deleteButton.setWidth(80);
        exportButton.setWidth(80);
        importButton.setWidth(80);
        jumpPage.setWidth(45);
        firstPage.setWidth(40);
        prevPage.setWidth(40);
        nextPage.setWidth(40);
        lastPage.setWidth(40);

        let upProgress = new west.gui.Button("Load", async function () {
            let html = $("<div></div>");
            // create 2 textfields for start and end page in which to look for logs

            // textfield for start page
            let startField = new west.gui.Textfield("startpage").setPlaceholder(1);
            let htmlStartField = $("<div></div>");
            htmlStartField.append("<span> Insert start page:</span>");
            startField.setWidth(100);
            htmlStartField.append(startField.getMainDiv());

            // textfield for end page
            let endField = new west.gui.Textfield("endpage").setPlaceholder(Multiscript.townLog.lastTownLogPage);
            let htmlEndField = $("<div></div>");
            htmlEndField.append("<span> Insert end page:</span>");
            endField.setWidth(100);
            htmlEndField.append(endField.getMainDiv());

            //button to load saved
            let loadSavedButton = new west.gui.Button("Load saved", async function () {
                if (window.localStorage.getItem("multiscript_allloadedlogs")) {
                    Multiscript.townLog.allLoadedLogs = JSON.parse(LZString.decompress(window.localStorage.getItem("multiscript_allloadedlogs")));
                    await Multiscript.rerenderTable(true);
                    new UserMessage("Saved logs loaded!", UserMessage.TYPE_SUCCESS).show();
                } else {
                    new UserMessage("There are no logs to be loaded!", UserMessage.TYPE_ERROR).show();
                }
            });

            //button to start loading
            let loadButton = new west.gui.Button("Load new", async function () {
                try {
                    let startPage = parseInt(startField.getValue());
                    let endPage = parseInt(endField.getValue());
                    if (startPage < 1 || startPage > Multiscript.townLog.lastTownLogPage || startPage > endPage) {
                        new UserMessage('Fix your start page number!', UserMessage.TYPE_ERROR).show();
                    } else if (endPage > Multiscript.townLog.lastTownLogPage || endPage < startPage || endPage < 1) {
                        new UserMessage('Fix your end page number!', UserMessage.TYPE_ERROR).show();
                    } else if (!Multiscript.isValidNumber(startField.getValue()) || !Multiscript.isValidNumber(endField.getValue())) {
                        new UserMessage('Fix your end & start page number!', UserMessage.TYPE_ERROR).show();
                    } else {
                        progressbar.setValue(startPage);
                        progressbar.setMaxValue(endPage);
                        Multiscript.townLog.allLoadedLogs = [];
                        window.localStorage.removeItem("multiscript_allloadedlogs");
                        for (let i = startPage; i <= endPage; i++) {
                            await new Promise(r => setTimeout(r, 550));
                            await Multiscript.getTownLog(Character.homeTown.town_id, i);
                            if (parseInt(progressbar.getValue()) >= endPage) {
                                window.localStorage.setItem("multiscript_allloadedlogs", LZString.compress(JSON.stringify(Multiscript.townLog.allLoadedLogs)));
                                new UserMessage('' + (i) + ' log pages loaded!', UserMessage.TYPE_SUCCESS).show();
                                await Multiscript.rerenderTable(true);
                                //console.log(Multiscript.townLog.allLoadedLogs);
                                break;
                            }
                            if (isCancelled) {
                                new UserMessage('Loaded ' + (i) + ' pages before stopping!', UserMessage.TYPE_SUCCESS).show();
                                break;
                            }
                            progressbar.increase(1);
                        }
                    }
                } catch (e) {
                    console.log(e);
                    new UserMessage('Error: ' + e, UserMessage.TYPE_ERROR).show();
                }
            });

            //progressbar
            let progressbar = new west.gui.Progressbar(0, Multiscript.townLog.lastTownLogPage);
            let isCancelled = false;
            let title = 'Load town logs';
            let dialog = new west.gui.Dialog(title,
                west.gui.Dialog.SYS_QUESTION);
            html.append(htmlStartField);
            html.append("<br>");
            html.append(htmlEndField);
            html.append("<br>");
            html.append("<p><strong>By loading new town logs, old ones will be overwritten!</strong></p><br><br>")
            html.append(progressbar.getMainDiv());
            html.append("<br>");
            html.append("<div>");
            html.append(loadButton.getMainDiv());
            html.append(loadSavedButton.getMainDiv());
            html.append("</div>");
            dialog.setText(html);

            dialog.addButton("cancel", function () {
                isCancelled = true;
            });

            dialog.show();
        });


        upProgress.setWidth(80);
        html.append(title);
        html.append(jumpPage.getMainDiv());
        html.append(firstPage.getMainDiv());
        html.append(prevPage.getMainDiv());
        html.append(nextPage.getMainDiv());
        html.append(lastPage.getMainDiv());
        html.append(upProgress.getMainDiv());
        html.append(exportButton.getMainDiv());
        html.append(importButton.getMainDiv());
        html.append(deleteButton.getMainDiv());
        html.append(nav);
        html.append(table);
        return html;
    };

    // Get logs from inno
    Multiscript.getTownLog = async function (townId, page) {
        Ajax.remoteCallMode('building_cityhall', 'list_log', {town_id: townId, page: page}, function (townlog) {
            //json.logs[index].data -- town log text
            //json.logs[index].log_date -- town log date
            //json.count -- number of pages in townlog
            //json.page -- current page
            Multiscript.townLog.logs = townlog.logs;
            Multiscript.townLog.currentTownLogPage = townlog.page;
            Multiscript.townLog.lastTownLogPage = townlog.count;
            Multiscript.townLog.allLoadedLogs.push(townlog.logs);
        });
        await new Promise(r => setTimeout(r, 500));
    };

    // Load player's saved sets from inno
    Multiscript.loadSets = async function (loadInstantly = false) {
        if (window.localStorage.getItem("multiscript_sets")) {
            Multiscript.sets = JSON.parse(window.localStorage.getItem("multiscript_sets"));
        } else {
            Ajax.remoteCallMode('inventory', 'show_equip', {}, function (r) {
                //console.log(r);
                Multiscript.sets = r.data;
                Multiscript.sets = Multiscript.sets.sort((a, b) => a.name.localeCompare(b.name));
                window.localStorage.setItem("multiscript_sets", JSON.stringify(Multiscript.sets));
            });
        }
        await new Promise(r => setTimeout(r, 50));
        if (loadInstantly) {
            Ajax.remoteCallMode('inventory', 'show_equip', {}, function (r) {
                //console.log(r);
                Multiscript.sets = r.data;
                Multiscript.sets = Multiscript.sets.sort((a, b) => a.name.localeCompare(b.name));
                window.localStorage.setItem("multiscript_sets", JSON.stringify(Multiscript.sets));
            });
        }
    };

    // Combobox UI for labor sets
    Multiscript.comboboxJobSets = function () {
        var combobox = new west.gui.Combobox();
        combobox.addItem(-1, "1.");
        for (var i = 0; i < Multiscript.sets.length; i++) {
            combobox.addItem(Multiscript.sets[i].equip_manager_id, Multiscript.sets[i].name);
        }
        combobox.setWidth(30);
        combobox.addListener(function (value) {
            Multiscript.lpSet = value;
        });
        return combobox;
    };

    // Combobox UI for intermediate sets
    Multiscript.comboboxIntermediateSets = function () {
        var combobox = new west.gui.Combobox();
        combobox.addItem(-1, "2.");
        for (var i = 0; i < Multiscript.sets.length; i++) {
            combobox.addItem(Multiscript.sets[i].equip_manager_id, Multiscript.sets[i].name);
        }
        combobox.setWidth(30);
        combobox.addListener(function (value) {
            Multiscript.interSet = value;
        });
        return combobox;
    };

    // Combobox UI for travel set
    Multiscript.comboboxTravelSet = function () {
        var combobox = new west.gui.Combobox();
        combobox.addItem(-1, "Please pick a travel set");
        for (var i = 0; i < Multiscript.sets.length; i++) {
            combobox.addItem(Multiscript.sets[i].equip_manager_id, Multiscript.sets[i].name);
        }
        combobox = combobox.select(Multiscript.travelSet == null ? -1 : Multiscript.travelSet);
        combobox.setWidth(180);
        combobox.addListener(function (value) {
            Multiscript.travelSet = value;
        });
        return combobox;
    };

    Multiscript.comboboxPrimarySet = function () {
        var combobox = new west.gui.Combobox();
        combobox.addItem(-1, "Please pick a primary set");
        for (var i = 0; i < Multiscript.sets.length; i++) {
            combobox.addItem(Multiscript.sets[i].equip_manager_id, Multiscript.sets[i].name);
        }
        combobox = combobox.select(Multiscript.primarySet == null ? -1 : Multiscript.primarySet);
        combobox.setWidth(180);
        combobox.addListener(function (value) {
            Multiscript.primarySet = value;
        });
        return combobox;
    };

    Multiscript.comboboxSecondarySet = function () {
        var combobox = new west.gui.Combobox();
        combobox.addItem(-1, "Please pick a secondary set");
        for (var i = 0; i < Multiscript.sets.length; i++) {
            combobox.addItem(Multiscript.sets[i].equip_manager_id, Multiscript.sets[i].name);
        }
        combobox = combobox.select(Multiscript.secondarySet == null ? -1 : Multiscript.secondarySet);
        combobox.setWidth(180);
        combobox.addListener(function (value) {
            Multiscript.secondarySet = value;
        });
        return combobox;
    };

    // Combobox UI for special sets
    Multiscript.comboboxGrindSets = function () {
        var combobox = new west.gui.Combobox();
        combobox.addItem(-1, "3.");
        for (var i = 0; i < Multiscript.sets.length; i++) {
            combobox.addItem(Multiscript.sets[i].equip_manager_id, Multiscript.sets[i].name);
        }
        combobox.setWidth(30);
        combobox.addListener(function (value) {
            Multiscript.grindSet = value;
        });
        return combobox;
    };

    // Travel to a job in selected job's job group in selected speed set
    Multiscript.walkToJob = async function (jobId, jobX, jobY) {
        //find job with lowest level requirement in a specified job group
        let groupId;
        let lowestLevelJobId;
        let arrayIdLevel = [];
        try {
            for (let i = 0; i < Multiscript.jobGroups.length; i++) {
                if (jobId == Multiscript.jobGroups[i].id) {
                    groupId = Multiscript.jobGroups[i].groupid;
                }
            }
            for (let i = 0; i < Multiscript.jobGroups.length; i++) {
                if (groupId == Multiscript.jobGroups[i].groupid) {
                    arrayIdLevel.push(Multiscript.jobGroups[i]);
                }
            }
            let sorted = arrayIdLevel.sort(function (a, b) {
                return a.level - b.level;
            });
            lowestLevelJobId = sorted[0].id;
            //console.log("Lowest level job id: " + lowestLevelJobId + " | Level required: " + sorted[0].level);
        } catch (e) {
            console.log("Exception occured in walkToJob: " + e);
        }

        JobWindow.startJob(lowestLevelJobId > Character.level ? jobId : lowestLevelJobId, jobX, jobY, 15);
        while (true) {
            if (Map.calcWayTime(Character.position, {
                x: jobX,
                y: jobY
            }) == 0) {
                break;
            }
            await new Promise(r => setTimeout(r, 1));
        }
        if (TaskQueue.queue.length > 0) {
            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 4000)));
            TaskQueue.cancelAll();
        }
    };

    // Job enhancer screen for in-game JobWindow
    // (set 9x, 7x job, choose a labor points set and a special set (for xp, money etc),
    // travel button that will move you to the lowest level job in that job's job group
    Multiscript.JobWindowEnhanced = {
        init() {
            JobWindow.backup_multiscript_initView = JobWindow.initView;
            JobWindow.initView = function () {
                JobWindow.backup_multiscript_initView.apply(this, arguments);

                let lpSetBox = Multiscript.comboboxJobSets();
                let grindSetBox = Multiscript.comboboxGrindSets();
                let interSetBox = Multiscript.comboboxIntermediateSets();
                lpSetBox.select(Multiscript.lpSet == null ? -1 : Multiscript.lpSet);
                grindSetBox.select(Multiscript.grindSet == null ? -1 : Multiscript.grindSet);
                interSetBox.select(Multiscript.interSet == null ? -1 : Multiscript.interSet);

                let nineTimes = Premium.hasBonus('automation') ? '9' : '4';
                let sevenTimes = Premium.hasBonus('automation') ? '7' : '4';

                // travel to job button
                let travelButton = new west.gui.Button("Travel", async () => {
                    let jobId = this.jobId;
                    let jobX = this.x;
                    let jobY = this.y;
                    if (TaskQueue.queue.length > 0) {
                        new UserMessage("Wait until all jobs are finished!", UserMessage.TYPE_ERROR).show();
                    } else if (Multiscript.travelSet == null || Multiscript.travelSet == -1) {
                        new UserMessage("Save your travel set in settings first!", UserMessage.TYPE_ERROR).show();
                    } else {
                        travelButton.disable();
                        await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1500, 3000)));
                        EquipManager.switchEquip(Multiscript.travelSet);
                        await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1800, 5000)));
                        await Multiscript.walkToJob(jobId, jobX, jobY);
                        if (TaskQueue.queue.length > 0) {
                            TaskQueue.cancelAll();
                        }
                        travelButton.enable();
                    }
                });
                travelButton.setWidth(80);

                let travelButtonDiv = travelButton.getMainDiv();
                travelButtonDiv.style['z-index'] = '5';
                travelButtonDiv.style.bottom = '25px';
                travelButtonDiv.style.left = '307px';
                this.window.divMain.querySelector('div.tw2gui_window_content_pane').appendChild(travelButton.getMainDiv());

                // 9x15s button
                const button9x = new west.gui.Button("9x", async () => {
                    if (Multiscript.grindSet === -1 || Multiscript.lpSet === -1) {
                        button9x.disable();
                        const jobAmountNum = this.window.divMain.getElementsByClassName(
                            'job-amount-num',
                        )[0];
                        const numberBefore = jobAmountNum.innerHTML;
                        jobAmountNum.innerHTML = nineTimes;
                        $(this.window.divMain)
                            .find('.job_durationbar.job_durationbar_short')
                            .click();
                        setTimeout(() => {
                            button9x.enable();
                            jobAmountNum.innerHTML = numberBefore;
                        }, 5000);
                    } else {
                        if (Multiscript.interSet != -1) {
                            button9x.disable();
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 2000)));
                            EquipManager.switchEquip(Multiscript.lpSet);
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            const jobAmountNum = this.window.divMain.getElementsByClassName(
                                'job-amount-num',
                            )[0];
                            jobAmountNum.innerHTML = nineTimes;
                            $(this.window.divMain)
                                .find('.job_durationbar.job_durationbar_short')
                                .click();
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(2000, 4500)));
                            EquipManager.switchEquip(Multiscript.interSet);
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 2500)));
                            EquipManager.switchEquip(Multiscript.grindSet);
                            setTimeout(() => {
                                button9x.enable();
                            }, 10000);
                        } else {
                            button9x.disable();
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            EquipManager.switchEquip(Multiscript.lpSet);
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            const jobAmountNum = this.window.divMain.getElementsByClassName(
                                'job-amount-num',
                            )[0];
                            jobAmountNum.innerHTML = nineTimes;
                            $(this.window.divMain)
                                .find('.job_durationbar.job_durationbar_short')
                                .click();
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            EquipManager.switchEquip(Multiscript.grindSet);
                            setTimeout(() => {
                                button9x.enable();
                            }, 10000);
                        }
                    }
                    // Flow: Button click -> wait 1500-3000 ms then switch equip -> wait 1800-5000 ms then autoclick 9x job -> wait 1500-5300 ms then switch equip
                });
                button9x.setWidth(40);

                // 7x15s button
                const button7x = new west.gui.Button("7x", async () => {
                    if (Multiscript.grindSet === -1 || Multiscript.lpSet === -1) {
                        button7x.disable();
                        const jobAmountNum = this.window.divMain.getElementsByClassName(
                            'job-amount-num',
                        )[0];
                        const numberBefore = jobAmountNum.innerHTML;
                        jobAmountNum.innerHTML = sevenTimes;
                        $(this.window.divMain)
                            .find('.job_durationbar.job_durationbar_short')
                            .click();
                        setTimeout(() => {
                            button7x.enable();
                            jobAmountNum.innerHTML = numberBefore;
                        }, 5000);
                    } else {
                        if (Multiscript.interSet != -1) {
                            button7x.disable();
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            EquipManager.switchEquip(Multiscript.lpSet);
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            const jobAmountNum = this.window.divMain.getElementsByClassName(
                                'job-amount-num',
                            )[0];
                            jobAmountNum.innerHTML = sevenTimes;
                            $(this.window.divMain)
                                .find('.job_durationbar.job_durationbar_short')
                                .click();
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(2000, 4500)));
                            EquipManager.switchEquip(Multiscript.interSet);
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 2500)));
                            EquipManager.switchEquip(Multiscript.grindSet);
                            setTimeout(() => {
                                button7x.enable();
                            }, 10000);
                        } else {
                            button7x.disable();
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            EquipManager.switchEquip(Multiscript.lpSet);
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            const jobAmountNum = this.window.divMain.getElementsByClassName(
                                'job-amount-num',
                            )[0];
                            jobAmountNum.innerHTML = sevenTimes;
                            $(this.window.divMain)
                                .find('.job_durationbar.job_durationbar_short')
                                .click();
                            await new Promise(r => setTimeout(r, Multiscript.generateRandomNumber(1000, 3500)));
                            EquipManager.switchEquip(Multiscript.grindSet);
                            setTimeout(() => {
                                button7x.enable();
                            }, 10000);
                        }
                    }
                });
                button7x.setWidth(40);

                // GUI
                let premBtn = this.window.divMain.querySelector('div.job_danger_motivation');
                let clothesButton = this.window.divMain.querySelector('div.job_wear_generator');
                let upperDivider = this.window.divMain.querySelector('div.job_left_divider');
                upperDivider.style.marginTop = "-5px";
                clothesButton.style.marginTop = "-15px";
                premBtn.innerHTML = '';
                premBtn.style.width = "auto";
                button7x.divMain.style.display = "inline-block";
                button7x.divMain.style.left = "0px";
                button9x.divMain.style.display = "inline-block";
                button9x.divMain.style.left = "0px";
                lpSetBox.divMain.display = "inline-block";
                grindSetBox.divMain.display = "inline-block";
                let divider = document.createElement("div");
                divider.classList.add("job_left_divider");
                divider.style.position = "initial";
                premBtn.appendChild(button9x.getMainDiv());
                premBtn.appendChild(button7x.getMainDiv());
                premBtn.appendChild(lpSetBox.getMainDiv()[0]);
                premBtn.appendChild(interSetBox.getMainDiv()[0]);
                premBtn.appendChild(grindSetBox.getMainDiv()[0]);
                premBtn.appendChild(divider);

                let motivBar = new west.gui.Progressbar(this.pbar_motivation.curr, this.pbar_motivation.max);
                motivBar.setLabel("Motivation", "hammer");
                motivBar.divMain[0].style.left = "auto";
                motivBar.divMain[0].style.position = "inherit";
                motivBar.divMain[0].style.lineHeight = "15px";
                motivBar.divMain[0].style.width = "130px";
                motivBar.divMain[0].childNodes[0].style.background = "none";
                motivBar.divMain[0].style.marginTop = "10px";
                motivBar.setTextOnly(true);

                let damageBar = new west.gui.Progressbar(this.pbar_hurt.curr, this.pbar_hurt.max);
                damageBar.setLabel("Danger", "gun");
                damageBar.divMain[0].style.left = "20px";
                damageBar.divMain[0].style.position = "inherit";
                damageBar.divMain[0].style.lineHeight = "15px";
                damageBar.divMain[0].style.width = "130px";
                damageBar.divMain[0].style.marginTop = "10px";
                damageBar.divMain[0].childNodes[0].style.background = "none";
                damageBar.setTextOnly(true);

                premBtn.appendChild(motivBar.getMainDiv()[0]);
                premBtn.appendChild(damageBar.getMainDiv()[0]);

                //style="left: auto;position: inherit;line-height: 15px;width: auto;"
                //premBtn.append("Danger: "+this.pbar_hurt.curr);
            };
        },
    };

    // Random number generator
    Multiscript.generateRandomNumber = function (min, max) {
        let minN = Math.min(min, max);
        let maxN = Math.max(min, max);
        return Math.floor((minN + Math.random() * (maxN - minN + 1)));
    };

    Multiscript.createFillChurchQueueButton = function (duration, title, fill) {
        let townX = Character.homeTown.x;
        let townY = Character.homeTown.y;
        let fillChurch = new west.gui.Button(title, async () => {
            if (fill) {
                let taskQueueLength = TaskQueue.queue.length;
                let playerEnergy = Character.energy;
                let numberOfJobsAvailableByEnergy = 0;
                let cycleFor = 0;
                let freeJobs = 0;
                let maxDoableJobs = Premium.hasBonus('automation') ? '9' : '4';
                if (duration == 900) {
                    numberOfJobsAvailableByEnergy = Math.floor(playerEnergy / 3);
                }
                if (duration == 1800) {
                    numberOfJobsAvailableByEnergy = Math.floor(playerEnergy / 6);
                }
                if (duration == 3600) {
                    numberOfJobsAvailableByEnergy = Math.floor(playerEnergy / 12);
                }

                numberOfJobsAvailableByEnergy = numberOfJobsAvailableByEnergy >= maxDoableJobs ? maxDoableJobs : numberOfJobsAvailableByEnergy;

                freeJobs = maxDoableJobs - taskQueueLength;
                cycleFor = numberOfJobsAvailableByEnergy >= freeJobs ? freeJobs : numberOfJobsAvailableByEnergy;

                //console.log(`numOfJobs: ${numberOfJobsAvailableByEnergy} || freeJobs: ${freeJobs} || cycleFor: ${cycleFor}`);

                if (freeJobs == 0 && numberOfJobsAvailableByEnergy > 0) {
                    new UserMessage("Task queue is full. Wait until some jobs are done.", UserMessage.TYPE_HINT).show();
                } else {
                    if (cycleFor > 0) {
                        for (let i = 1; i <= cycleFor; i++) {
                            await new Promise(r => setTimeout(r, 250));
                            TaskQueue.add(new TaskBuild(townX, townY, 'church', duration, "town"));
                            if (i == cycleFor) {
                                new UserMessage(i + " jobs added to queue!", UserMessage.TYPE_SUCCESS).show();
                                break;
                            }
                        }
                    } else {
                        if (freeJobs < 1) {
                            new UserMessage("Task queue is full!", UserMessage.TYPE_ERROR).show();
                        } else if (numberOfJobsAvailableByEnergy < 1) {
                            new UserMessage("Not enough energy to work!", UserMessage.TYPE_ERROR).show();
                        }
                    }
                }
            } else {
                TaskQueue.add(new TaskBuild(townX, townY, 'church', duration, "town"));
            }
        });
        if (townX == 0 && townY == 0) {
            fillChurch.disable();
        }
        return fillChurch.getMainDiv();
    }

    Multiscript.createMultiscriptButton = function () {

        let workUiContainer = Multiscript.settings.showMultiscriptButtonLeft ? document.getElementById('ui_chat') : document.getElementById('ui_workcontainer');
        let uiBottomRight = Multiscript.settings.showMultiscriptButtonLeft ? document.getElementById('ui_bottomleft') : document.getElementById('ui_bottomright');

        let openMultiscriptButton = new west.gui.Button("Quick Features", () => {
            Multiscript.openWindow().then();
            Multiscript.selectTab("mDialog");
        });

        if (Multiscript.settings.showMultiscriptButtonLeft) {
            openMultiscriptButton.setWidth(117);
        }

        let omb = openMultiscriptButton.getMainDiv();


        let setsButton = new west.gui.Button("Sets", () => {
            Multiscript.openWindow().then();
            Multiscript.selectTab("setManager");
        });
        setsButton.setWidth(80);
        let sb = setsButton.getMainDiv();

        // style="margin-left: 130px; margin-bottom: 10px;" --- right
        // margin-bottom: 0px;left: 35px;top: 12px;width: 197px; --- left
        if (Multiscript.settings.showMultiscriptButtonLeft) {
            omb.style.marginBottom = "0px";
            omb.style.left = "30px";
            omb.style.top = "12px";
            sb.style.marginBottom = "0px";
            sb.style.left = "30px";
            sb.style.top = "12px";
        } else {
            //omb.style.marginLeft = "130px";
            omb.style.marginBottom = "15px";
            omb.style.top = "5px";
            omb.style.left = "30px";

            sb.style.left = "30px";
            sb.style.top = "12px";
        }

        let div = document.createElement("div");
        div.appendChild(omb);
        div.appendChild(sb);

        uiBottomRight.insertBefore(div, workUiContainer);
    };

    // Start building church for 1hr 30min 15min
    Multiscript.buildChurchButton = function (time) {
        let townX = Character.homeTown.x;
        let townY = Character.homeTown.y;
        TaskQueue.add(new TaskBuild(townX, townY, 'church', time, "town"));
    };

    // GUI for church building fast buttons
    Multiscript.createChurchBuild = function () {
        //style="margin-top: 35px;left: 300px;text-align: center;" --- topbar
        // style="margin-left: 130px; text-align: center;margin-bottom: 10px;" --- above work queue
        let buffBars2 = $('<div id="buffbars" class="buffbars_multiscript" style="margin-top: 60px"></div>');
        if (Character.homeTown.town_id != 0 && Character.homeTown.x != 0 && Character.homeTown.y != 0) {
            let churchQuarter = $('<div class="buffbar buffbar_church"><div id="buff_div_church_15" class="buff_div " style="cursor: pointer;" onclick=Multiscript.buildChurchButton(900);><div class="bag_item_mini"><img class="hasMousePopup" src="https://westcz.innogamescdn.com/images/jobs/build.png" alt="undefined" width="43"><div class="bag_item_count"><p>15m</p></div></div><span class="buffspan" id="church_build_15"></span></div></div>');
            let churchHalf = $('<div class="buffbar buffbar_church"><div id="buff_div_church_30" class="buff_div " style="cursor: pointer;" onclick=Multiscript.buildChurchButton(1800);><div class="bag_item_mini"><img class="hasMousePopup" src="https://westcz.innogamescdn.com/images/jobs/build.png" alt="undefined" width="43"><div class="bag_item_count"><p>30m</p></div></div><span class="buffspan" id="church_build_30"></span></div></div>');
            let churchFull = $('<div class="buffbar buffbar_church"><div id="buff_div_church_60" class="buff_div " style="cursor: pointer;" onclick=Multiscript.buildChurchButton(3600);><div class="bag_item_mini"><img class="hasMousePopup" src="https://westcz.innogamescdn.com/images/jobs/build.png" alt="undefined" width="43"><div class="bag_item_count"><p>1h</p></div></div><span class="buffspan" id="church_build_60"></span></div></div>');
            $('#user-interface').append(buffBars2);
            $(buffBars2).append(churchQuarter, churchHalf, churchFull);
        }
    };

    /*Multiscript.getJobGroups = function () {
        let arrayOfJobGroups = [];
        for (let i = 0; i < 100; i++) {
            if (JobList.getJobsByGroupId(i) != undefined) {
                arrayOfJobGroups.push(JobList.getJobsByGroupId(i));
            } else {
                console.log("Job group number " + i + " is undefined");
            }
        }
        localStorage.setItem("jobGroups", JSON.stringify(arrayOfJobGroups));
    };*/

    // ========================== TW Perseus Toolkit SCRIPTS ========================== \\

    Multiscript.CinemaSkipButton = {
        init() {
            const button = new west.gui.Button('Skip ad', () => {
                CinemaWindow.controller('rewards');
            });

            let acceptCinemaQuest = new west.gui.Button('Accept cinema quest', () => {
                Ajax.remoteCall("quest", "accept_quest", {quest_id: 10156}, function (json) {
                    if (json.error) {
                        console.log("========== Multiscript: error accepting daily cinema quest!");
                        new UserMessage(json.msg, UserMessage.TYPE_ERROR).show();
                    } else {
                        new UserMessage("Daily cinema quest accepted!", UserMessage.TYPE_SUCCESS).show();
                        acceptCinemaQuest.disable();
                    }
                });
            });
            let completeCinemaQuest = new west.gui.Button('Complete cinema quest', () => {
                Ajax.remoteCall("quest", "finish_quest", {
                    quest_id: 10156,
                    reward_option_id: 0 //no reward to choose from
                }, function (json) {
                    if (json.error) {
                        new UserMessage("Daily cinema quest unavailable!", UserMessage.TYPE_ERROR).show();
                        console.log("========== Multiscript: error finishing daily cinema quest!");
                    } else {
                        new UserMessage("Daily cinema quest completed!", UserMessage.TYPE_SUCCESS).show();
                        completeCinemaQuest.disable();
                    }
                });
            });

            CinemaWindow.backup_multiscript_controller = CinemaWindow.controller;
            CinemaWindow.controller = function (key) {
                button.setVisible(false);
                button.disable();

                // Uncomment the following line if you want to access rewards directly.
                //if (key === "video") return CinemaWindow.backup_multiscript_controller("rewards");

                if (key === 'video') {
                    let count = 3;
                    const countDown = () => {
                        if (count > 0) {
                            button.setCaption(`Skip ad (${count})`);
                            setTimeout(countDown, 1000);
                            count -= 1;
                        } else {
                            button.setCaption('Skip ad');
                            button.enable();
                        }
                    };
                    button.setVisible(true);
                    countDown();
                }

                // If there is no ad available you should be able to get the rewards.
                if (key === 'noVideo') {
                    return CinemaWindow.backup_multiscript_controller('rewards');
                }

                return CinemaWindow.backup_multiscript_controller("rewards"); //return rewards instantly
            };

            CinemaWindow.multiscript_open = CinemaWindow.open;
            CinemaWindow.open = function (townId) {
                CinemaWindow.multiscript_open(townId);
                const videoDiv = $(this.window.divMain).find(
                    ".tw2gui_inner_window_title");

                if (videoDiv != null) {
                    completeCinemaQuest.divMain.setAttribute(
                        'style',
                        'margin-left: 424px; margin-top: 425px',
                    );
                    acceptCinemaQuest.divMain.setAttribute(
                        'style',
                        'margin-left: 262px; top: -32px;',
                    );
                    let btn = completeCinemaQuest.getMainDiv();
                    let btn2 = acceptCinemaQuest.getMainDiv();
                    btn.style.zIndex = "500";
                    btn2.style.zIndex = "500";
                    videoDiv.after($("<br>"));
                    videoDiv.after(btn2);
                    videoDiv.after(btn);
                }
                /*const header = $(this.window.divMain).find(
                    '.tw2gui_inner_window_title',
                );
                button.divMain.setAttribute(
                    'style',
                    'margin-left: 20px; margin-top: -20px',
                );
                button.setVisible(false);
                header.append(button.getMainDiv());*/
            };
        },
    };

    Multiscript.DisablePremiumNotifications = {
        init() {
            Premium.checkForEnergyPremium = function (
                callback,
                failCallback,
            ) {
                if (typeof failCallback !== 'undefined')
                    return failCallback();

                return () => {
                };
            };
            Premium.checkForAutomationPremium = function (
                callback,
                failCallback,
            ) {
                if (typeof failCallback !== 'undefined')
                    return failCallback();

                return () => {
                };
            };
        },
    };

    Multiscript.HideDrawingMap = {
        init() {
            GameLoader.backup_multiscript_async = GameLoader.async;
            GameLoader.async = function (message, signal, callback, max) {
                GameLoader.backup_multiscript_async(
                    message,
                    signal,
                    callback,
                    max,
                    true,
                    true,
                );
            };
        },
    };

    // ========================== TW Perseus Toolkit SCRIPTS ========================== \\
    $(document).ready(async function () {
        try {
            if (window.localStorage.getItem("multiscript_settings")) {
                Multiscript.settings = JSON.parse(window.localStorage.getItem("multiscript_settings"));
            }
            if (Character.homeTown.town_id != 0) {
                await Multiscript.getTownLog(Character.homeTown.town_id, 1);
            }
            Multiscript.travelSet = window.localStorage.getItem("multiscript_travelset") ?? null;
            Multiscript.primarySet = window.localStorage.getItem("multiscript_primaryset") ?? null;
            Multiscript.secondarySet = window.localStorage.getItem("multiscript_secondaryset") ?? null;
            Multiscript.HideDrawingMap.init();
            Multiscript.CinemaSkipButton.init();
            Multiscript.DisablePremiumNotifications.init();
            Multiscript.createMultiscriptButton();

            // check saved settings and show buttons accordingly
            if (Multiscript.settings.showChurchUnderBuffBars) {
                Multiscript.createChurchBuild();
            }
            if (Multiscript.settings.showLogOutNextToBuffBar) {
                Multiscript.createLogOutBuffBar();
            }
            if (Object.keys(Game.sesData).length > 1) {
                if (Multiscript.settings.showEventSendAllButtonNextToBuffBar) {
                    Multiscript.sendCurrencyToAllButton();
                }
            }

            Multiscript.createMenuIcon();

            // ========================== load player's sets ========================== \\
            await Multiscript.loadSets();
            await Multiscript.loadSets(true);
            // ========================== load player's sets ========================== \\

            Multiscript.JobWindowEnhanced.init();
            //Multiscript.whichToCancel = [];

            Multiscript.createCancelTasksButton.init();

            if (TaskQueue.queue.length > 1) {
                Multiscript.cancelSelectedTasks();
            } else {
                Multiscript.whichToCancel = [];
            }

            $(".middle").hover(
                function () {
                    if (TaskQueue.queue.length > 1) {
                        Multiscript.cancelSelectedTasks();
                    } else {
                        Multiscript.whichToCancel = [];
                    }
                }, function () {
                }
            );
            Multiscript.travelSetInMarketWindow.init();

        } catch (e) {
            console.log("===================================== Multiscript exception occured:" + e);
        }
    });
})();